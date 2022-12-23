import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import { LoginInput, LoginMutation, LoginMutationVariables, LogoutMutation, LogoutMutationVariables } from '../types'

const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input)
  }
`

export const useLogin = () => {
  const [ mutate ] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN)

  return useCallback(
    (input: LoginInput) => mutate({
      variables: {
        input
      }
    }), 
    [ mutate ]
  )
}

const LOGOUT = gql`
  mutation Logout($token: String!) {
    logout(token: $token)
  }
`

export const useLogout = () => {
  const [mutate] = useMutation<LogoutMutation, LogoutMutationVariables>(LOGOUT)

  return useCallback(
    (token: string) => mutate({
      variables: {
        token
      }
    }),
    [mutate]
  )
}