import styled from 'styled-components'

export const ExchangeFormWrapper = styled('div')`
  max-width: 960px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 220px;

  & > h1 {
    margin-bottom: 16px;
    font-size: 50px;
    font-weight: 300;
    line-height: 120%;
    @media screen and (max-width: 768px) {
      margin-bottom: 14px;
      font-size: 40px;
    }
  }

  & > h5 {
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 64px;
  }
`

export const CurrencyInputsWrapper = styled('div')`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: end;
    gap: 16px;
  }
`

export const AddressInputWrapper = styled('div')`
  display: flex;
  gap: 32px;
  align-items: end;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
