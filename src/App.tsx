
import { useEffect, useRef, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { Axios, CanceledError } from 'axios';

interface User {
  id: number;
  name: string;

}

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    const controller = new AbortController();

    // get -> primise -> res / err
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal}).then(
      res => setUsers(res.data)
    ).catch(err => {
      if( err instanceof CanceledError) return
      setError(err.message)})
    
    return () => controller.abort()
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