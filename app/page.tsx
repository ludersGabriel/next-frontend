'use client'

import Login from '../components/auth/login'
import { useInfoQuery } from '../graphql/info/info.query'
import { Wrapper } from './styles'

export default function Home() {
  const { info } = useInfoQuery()

  return (
    <Wrapper>
      <p>{info}</p>
      <Login />
    </Wrapper >
  )
}
