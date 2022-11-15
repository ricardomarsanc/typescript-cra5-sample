import { User as UserType } from '../types'
import { User } from './User'

interface UserListProps {
  users: UserType[]
}

const UserList = (props: UserListProps) => {
  const { users } = props

  return (
    <ul>
      {
        users.map(user => {
          return (
            <User key={user.id} {...user} />
          )
        })
      }
    </ul>
  )
}

export { UserList }