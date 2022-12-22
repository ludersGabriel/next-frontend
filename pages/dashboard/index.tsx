import { useAuth } from '../../context/auth.context'
import { Button } from '../../styles/global'
import { Wrapper } from '../../styles/home'

const Dashboard = () => {
  const { signOut, user } = useAuth()

  return (
    <Wrapper>
      <p>id: {user.id}</p>
      <p>username: {user.username}</p>
      <p>name: {user.name}</p>
      <p>role: {user.role}</p>
      <Button onClick={signOut}>Sign out</Button>
    </Wrapper>
  )
}

export default Dashboard