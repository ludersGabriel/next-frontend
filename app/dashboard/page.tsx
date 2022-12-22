'use client'

import { useAuth } from '../../context/auth.context'

const Dashboard = () => {
  const { signOut, user } = useAuth()

  return (
    <>
      <p>id: {user.id}</p>
      <p>username: {user.username}</p>
      <p>name: {user.name}</p>
      <p>role: {user.role}</p>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default Dashboard