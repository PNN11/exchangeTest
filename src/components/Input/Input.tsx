import { ChangeEventHandler, FC, useId } from 'react'
import { InputProps } from './Input.types'
import { InputWrapper } from './Input.styles'

const Input: FC<InputProps> = ({ setValue, value, label }) => {
  const id = useId()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <InputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} value={value} onChange={handleChange} />
    </InputWrapper>
  )
}

export default Input
