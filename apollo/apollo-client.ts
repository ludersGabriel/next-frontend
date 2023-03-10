import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

import nookies from 'nookies'

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_DEV_BASE_URL })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = nookies.get(null, 'template-token')['template-token']


  operation.setContext(({ headers = {} }) => {
    
    return {
      headers: {
        ...headers,
        Authorization: token
      },
    }
  })

  return forward(operation)
})

const isServer = typeof window === 'undefined'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: !isServer ? concat(authMiddleware, httpLink) : httpLink,
})

export default client
