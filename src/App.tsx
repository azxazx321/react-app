
import 'bootstrap/dist/css/bootstrap.min.css';
import userService, {User} from './components/services/user-service';
import useUsers from './components/hooks/useUsers';
function App() {

  const { users, error, isLoading, setUsers, setError } = useUsers()

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))
    userService.delete(user.id)
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers)
    })
  }
  const addUser = () => {
    const newUsers = {id: 0, name: 'Mosh'}
    const originalUsers = [...users]
    setUsers([...users, newUsers])
   
    userService.create(newUsers).then(({data : savedUser}) => setUsers([savedUser, ...users ]))
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers)
    })
  }
  const updateUser = (user: User) => {
    const updateUser = {...user, name: user.name + '!'}
    const originalUsers = [...users]
    setUsers(users.map( u => u.id === user.id ? updateUser : u))
    
    userService.update( updateUser).catch( err => {
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