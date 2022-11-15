import { User as UserType } from "../types"

interface UserProps extends UserType {}

const User = (props: UserProps) => {
  const { nick, name, email, id } = props
  return (
    <li>
      <h3>{nick} {id}</h3>
      <h5>{name} (<small>{email}</small>)</h5>
    </li>
  )
}

export { User }