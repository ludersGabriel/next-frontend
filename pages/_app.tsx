import { AppContext, AppProps } from 'next/app'
import React from 'react'
import nookies from 'nookies'
import { serverMe } from '../graphql/user/user.mutation'
import { User } from '../graphql/types'
import Providers from '../components/provider'
import GlobalStyles from '../styles/global'
import Router from 'next/router'
import Head from 'next/head'


type Props = AppProps & {
  token: string
  user: User | null
}

const MyApp = ({ Component, pageProps, token, user }: Props) => {
  return (
    <Providers user={user} token={token}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Template PWA</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
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