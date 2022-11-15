import { ChangeEvent, FormEvent } from 'react'
import { useNewSubForm } from '../hooks'
import { Sub } from '../types'

interface FormProps {
  onNewSub?: (sub: Sub) => void
}

const Form = (props: FormProps) => {
  const { onNewSub } = props

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onNewSub?.(inputValues)

    handleClear()
  }

  const handleClear = () => {
    dispatch({ type: 'clear' })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nick"
        placeholder='Nick'
        value={inputValues.nick}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subMonths"
        placeholder='Months subscribed'
        value={inputValues.subMonths}
        onChange={handleChange}
      />
      <input
        type="text"
        name="avatar"
        placeholder='Avatar'
        value={inputValues.avatar}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder='Description'
        value={inputValues.description}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClear}>Clear the form</button>
      <button>Save new sub!</button>
    </form>
  )
}

export { Form }