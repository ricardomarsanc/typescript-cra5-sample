import { Sub as SubType } from "../types"

interface SubProps extends SubType {}

const Sub = (props: SubProps) => {
  const { nick, avatar, subMonths, description } = props
  return (
    <li>
      <img src={avatar} alt={`Avatar for ${nick}`} />
      <h4>{nick} (<small>{subMonths}</small>)</h4>
      <p>{description?.substring(0, 100)}</p>
    </li>
  )
}

export { Sub }
export type { SubProps }
