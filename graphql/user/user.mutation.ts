import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback } from 'react'
import client from '../../apollo/apollo-client'
import { MeMutation, MeMutationVariables, User } from '../types'

export const ME = gql`
  mutation Me {
    me {
      id
      username
      name
      role
    }
  }
`

export const useMe = () => {
  const [mutate] = useMutation<MeMutation, MeMutationVariables>(ME)

  return useCallback(
    () => mutate(),
    [mutate]
  )
}

export const serverMe = async (token: string): Promise<{me: User | null}> => {
  const { data } = await client.mutate<MeMutation, MeMutation>({
    mutation: ME,
    context: {
      headers: {
        Authorization: token
      }
    }
  })

  return {
    me: data?.me ? data.me : null
  }
}

