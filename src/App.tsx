import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { UserList } from './components'
import { User, UsersAPI } from './types'
import './App.css';

interface AppState {
  // subs: Sub[]
  users: User[]
}

// const INITIAL_STATE: Sub[] = [
//   {
//     nick: "ricmart",
//     subMonths: 3,
//     avatar: 'https://i.pravatar.cc/150?img=16',
//     description: "Sample"
//   },
//   {
//     nick: "sergio",
//     subMonths: 5,
//     avatar: 'https://i.pravatar.cc/150?img=64',
//   }
// ]

function App() {
  // const [subs, setSubs] = useState<AppState["subs"]>([])
  const [users, setUsers] = useState<AppState["users"]>([])

  // useEffect(() => {
  //   setSubs(INITIAL_STATE)
  // }, [])

  useEffect(() => {
    const fetchUsers = () =>
      axios.get<UsersAPI>('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)


    const mapFromApiToUsers = (apiResponse: UsersAPI): Array<User>  => {
      return apiResponse.map(userApi => {
        const {
          id,
          name,
          username: nick,
          email
        } = userApi
        return { id, name, nick, email }
      })
    }

    fetchUsers()
      .then(mapFromApiToUsers)
      .then(setUsers)
  }, [])

  // const handleNewSub = (newSub: Sub) => {
  //   setSubs([...subs, newSub])
  // }

  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div className="App" ref={divRef}>
      <h1>Users</h1>
      {/* <List subs={subs}/>
      <Form onNewSub={handleNewSub}/> */}
      <UserList users={users} />
    </div>
  );
}

export default App;
