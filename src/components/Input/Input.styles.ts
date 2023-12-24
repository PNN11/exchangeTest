import styled from 'styled-components'

export const InputWrapper = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > input {
    border-radius: 5px;
    border: 1px solid #e3ebef;
    background: #f6f7f8;
    padding: 12px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
