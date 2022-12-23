import React, { use, useEffect, useState } from 'react'
import { useLogin, useLogout } from '../graphql/auth/auth.mutation'
import { LoginInput, User, Role } from '../graphql/types'
import { AuthContext } from './auth.context'
import nookies from 'nookies'
import { serverMe, useMe } from '../graphql/user/user.mutation'
import { useRouter } from 'next/router'

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
  const logout = useLogout()
  const router = useRouter()

  async function signIn(input: LoginInput) {
    const token = (await login(input)).data?.login || ''

    setToken(token)
    nookies.set(null, 'template-token', token, { path: '/', sameSite: true })
    const { me } = await serverMe(token)

    if (me) setUser(me)

    return token
  }

  async function signOut() {
    await logout(token)
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