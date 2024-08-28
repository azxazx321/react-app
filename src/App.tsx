
import { useEffect, useRef, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { Axios, AxiosError } from 'axios';

interface User {
  id: number;
  name: string;

}

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchUsers = async () => {
      // get -> primise -> res / err

      try {
        const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      }
      catch (err) {
        setError((err as AxiosError).message)
      }

    }

    fetchUsers();

  }, [])

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>

  )
}

export default App;