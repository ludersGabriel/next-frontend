'use client'

import { ApolloProvider } from '@apollo/client'
import client from '../../apollo/apollo-client'
import { LayoutWrapper } from '../../app/styles'
import AuthProvider from '../../context/auth.provider'
import { User } from '../../graphql/types'

type IProps = {
  children: React.ReactNode
  user: User | null
  token: string
}

const Providers = ({ children, user, token }: IProps) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider user={user} token={token}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default Providers