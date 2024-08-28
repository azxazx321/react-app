
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

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(
      res => setUsers(res.data)
    )
  },[])

  return (
      <ul>
        {users.map( user => <li key={user.id}>{user.name}</li>)}
      </ul>
   
  )
}

export default App;