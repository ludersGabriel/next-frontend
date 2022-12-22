import { usePathname, useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import { useLogin } from '../graphql/auth/auth.mutation'
import { LoginInput, User, Role } from '../graphql/types'
import { AuthContext } from './auth.context'
import nookies from 'nookies'
import { serverMe, useMe } from '../graphql/user/user.mutation'

type AuthProviderProps = {
  children: React.ReactNode
  user: User | null
  token: string
}

const defaultUser: User = {
  id: '',
  username: '',
  role: Role.User,
  name: ''
}

const AuthProvider = ({ children, user: serverUser, token: serverToken }: AuthProviderProps) => {
  const [token, setToken] = useState<string>(serverToken)
  const [user, setUser] = useState<User>(serverUser ? serverUser : defaultUser)
  const login = useLogin()
  const router = useRouter()
  const pathname = usePathname()

  // TODO: discover how to this in server layout, not client
  useEffect(() => {
    if (!user.id && pathname !== '/') {
      router.push('/')
    } else if (user.id && pathname === '/') {
      router.push('/dashboard')
    }
  }, [
    user,
    pathname,
    router
  ])

  async function signIn(input: LoginInput) {
    const token = (await login(input)).data?.login || ''

    setToken(token)
    nookies.set(null, 'template-token', token, { path: '/', sameSite: true })
    const { me } = await serverMe(token)

    if (me) setUser(me)

    return token
  }

  // TODO: blacklist the token
  async function signOut() {
    setToken('')
    nookies.set(null, 'template-token', '', { path: '/', sameSite: true })
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, token, user }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider