import styled from 'styled-components'
import { CurrencyInputWrapperProps, DropdownWrapperProps } from './Currency.input.types'

export const CurrencyInputWrapper = styled('div')<CurrencyInputWrapperProps>`
  display: flex;
  border-radius: ${(props) => (props.isOpen ? '5px 5px 0 0' : '5px')};
  border: 1px solid;
  border-color: ${(props) => (props.isOpen ? '#C1D9E5' : '#e3ebef')};
  background: #f6f7f8;
  padding: 9px 8px 9px 16px;
  align-items: center;
  width: 100%;
  position: relative;
  & input {
    color: #282828;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const DropdownWrapper = styled('div')<DropdownWrapperProps>`
  border-left: 1px solid #e3ebef;
  width: fit-content;

  & ul {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    max-height: 144px;
    overflow-y: scroll;
    top: 100%;
    left: -1px;
    right: -1px;
    background-color: #f6f7f8;
    border: 1px solid #c1d9e5;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-color: #e3ebef;
    z-index: 10;
    & > li {
      padding: 13px 16px 12px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      & > p:first-of-type {
        text-transform: uppercase;
      }
      & > p:last-of-type {
        margin-left: 4px;
        color: #80a2b6;
      }
      &:hover {
        background-color: #eaf1f7;
      }
    }
  }
`

export const ActiveItemWrapper = styled('button')<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  padding-left: 34px;
  gap: 30px;
  height: 30px;
  cursor: pointer;
  & > div {
    white-space: nowrap;
  }
`

export const ActiveItem = styled('div')`
  display: flex;
  gap: 12px;
  align-items: center;
  text-transform: uppercase;

  & > div {
    color: #282828;
    font-size: 16px;
    line-height: 23px;
  }
`

export const SearchInputWrapper = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  & > button {
    height: 16px;
    cursor: pointer;
  }
`

export const InputErrorMessage = styled('div')`
  position: absolute;
  bottom: -30px;
  left: 0;
  color: #e03f3f;
`
