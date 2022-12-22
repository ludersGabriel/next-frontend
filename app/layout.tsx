import Providers from '../components/provider'
import { cookies, headers } from 'next/headers'
import { serverMe } from '../graphql/user/user.mutation'
import { User } from '../graphql/types'

type RootLayoutProps = {
  children: React.ReactNode
  params: any
};

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const nextCookies = cookies()

  const token = nextCookies.get('template-token')?.value || ''

  let user: User | null = null

  try {
    const { me } = await serverMe(token)
    user = me
  }
  catch {
    user = null
  }

  return (
    <html>
      <body>
        <Providers user={user} token={token}>
          {children}
        </Providers>
      </body>
    </html >
  )
}

export default RootLayout