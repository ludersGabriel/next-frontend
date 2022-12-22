import { gql, useQuery } from '@apollo/client'
import { InfoQueryQuery, InfoQueryQueryVariables } from '../types'

const INFO_QUERY = gql`
  query InfoQuery {
    info 
  }
`

export const useInfoQuery = () => {
  const { data, loading, error } = useQuery<InfoQueryQuery, InfoQueryQueryVariables>(INFO_QUERY)

  return {
    info: data?.info || '',
    loading,
    error
  }
}