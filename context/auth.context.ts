import { createContext, useContext } from 'react'
import { LoginInput, User } from '../graphql/types'

export type AuthContextType = {
  signIn: (input: LoginInput) => Promise<string>
  signOut: () => void
  token: string
  user: User
}

export const AuthContext = createContext({} as AuthContextType)

export const useAuth = () => {
  return useContext(AuthContext)
}