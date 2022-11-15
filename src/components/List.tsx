import { Sub, SubProps as SubType } from './Sub'
interface ListProps {
  subs: SubType[]
}

const List = (props: ListProps) => {
  const { subs } = props

  return (
    <ul>
      {
        subs.map(sub => {
          return (
            <Sub key={sub.nick} {...sub} />
          )
        })
      }
    </ul>
  )
}

export { List }