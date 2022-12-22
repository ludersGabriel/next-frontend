import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import { LoginInput, LoginMutation, LoginMutationVariables } from '../types'

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