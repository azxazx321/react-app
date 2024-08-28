
import { useEffect, useRef, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { Axios } from 'axios';

interface User {
  id: number;
  name: string;

}

function App() {
  const connect = () => console.log('Connecting')
  const disconnect = () => console.log('Disconnecting')

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    // get -> primise -> res / err
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(
      res => setUsers(res.data)
    ).catch(err => setError(err.message))
  },[])

  return (
    <>
       {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map( user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
   
  )
}

export default App;