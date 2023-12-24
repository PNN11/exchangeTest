import { FC } from 'react'
import { StyledButtonWrapper } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ onClick, title, errorMessage }) => {
  return (
    <StyledButtonWrapper>
      <button type='button' onClick={onClick}>
        {title}
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </StyledButtonWrapper>
  )
}

export default Button
