import { AppContext, AppProps } from 'next/app'
import React from 'react'
import nookies from 'nookies'
import { serverMe } from '../graphql/user/user.mutation'
import { User } from '../graphql/types'
import Providers from '../components/provider'
import GlobalStyles from '../styles/global'
import Router from 'next/router'


type Props = AppProps & {
  token: string
  user: User | null
}

const MyApp = ({ Component, pageProps, token, user }: Props) => {
  return (
    <Providers user={user} token={token}>
      <Component {...pageProps} />
      <GlobalStyles />
    </Providers>
  )
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const { pathname, req, res } = ctx
  const { 'template-token': token } = nookies.get(ctx)

  let user = null
  try {
    const { me } = await serverMe(token)
    user = me
  } catch {
    user = null
  }

  if (pathname !== '/' && (!user || !token)) {
    if (res) {
      res.writeHead(302, { Location: '/' })
      res.end()
    } else {
      Router.push('/')
    }
  }

  return {
    token: token ?? null,
    user
  }
}

export default MyApp