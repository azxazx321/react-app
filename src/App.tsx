
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { Axios, CanceledError } from 'axios';

interface User {
  id: number;
  name: string;

}

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const controller = new AbortController();

    // get -> primise -> res / err
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal}).then(
      res => {
        setUsers(res.data)
        setIsLoading(false);
      }
    ).catch(err => {
      if( err instanceof CanceledError) return
      setError(err.message)
      setIsLoading(false);
    })
    
    
    return () => controller.abort()
  },[])

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))
    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers)
    })
  }
  const addUser = () => {
    const newUsers = {id: 0, name: 'Mosh'}
    const originalUsers = [...users]
    setUsers([...users, newUsers])
    axios.post('https://jsonplaceholder.typicode.com/users/' , newUsers)
    .then(({data : savedUser}) => setUsers([savedUser, ...users ]))
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers)
    })
  }
  return (
    <>
        {isLoading && <div className="spinner-border"></div>}
       {error && <p className="text-danger">{error}</p>}
       <button className="btn btn-outline-danger" onClick={() => addUser()}>Add</button>

      <ul className='list-group'>
        {users.map( user => <li key={user.id} className='list-group-item d-flex justify-content-between'>
          {user.name}
          <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>

          </li>)}
      </ul>
    </>
   
  )
}

export default App;