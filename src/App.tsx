
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CanceledError}from './components/services/api-client';
import userService, {User} from './components/services/user-service';
function App() {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {

    // get -> primise -> res / err
    const {request, cancel} = userService.getAllUsers()
    request.then(
      res => {
        setUsers(res.data)
        setIsLoading(false);
      }
    ).catch(err => {
      if( err instanceof CanceledError) return
      setError(err.message)
      setIsLoading(false);
    })
    
    
    return () => cancel()
  },[])

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))
    userService.deleteUser(user)
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers)
    })
  }
  const addUser = () => {
    const newUsers = {id: 0, name: 'Mosh'}
    const originalUsers = [...users]
    setUsers([...users, newUsers])
   
    userService.createUser(newUsers).then(({data : savedUser}) => setUsers([savedUser, ...users ]))
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers)
    })
  }
  const updateUser = (user: User) => {
    const updateUser = {...user, name: user.name + '!'}
    const originalUsers = [...users]
    setUsers(users.map( u => u.id === user.id ? updateUser : u))
    
    userService.updateUser( updateUser).catch( err => {
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
          <div>
            <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update</button>

            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </div>
         

          </li>)}
      </ul>
    </>
   
  )
}

export default App;