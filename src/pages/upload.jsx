import { useEffect, useState } from 'react'
import { PrismaClient } from "@prisma/client";

function UsersTable() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const prisma = new PrismaClient();

      const result = await await prisma.users.findMany()
      setUsers(result)
    }
    fetchData()
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Username</th>
          <th>Birthday</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.avatar}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.birthday}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable
