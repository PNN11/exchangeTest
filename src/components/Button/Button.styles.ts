import styled from 'styled-components'

export const StyledButtonWrapper = styled('div')`
  display: inline-block;
  position: relative;

  & > button {
    display: inline-block;
    background-color: #11b3fe;
    border-radius: 5px;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: 0.48px;
    text-transform: uppercase;
    padding: 15px 59px;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: #0095e0;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
  }
  & > p {
    color: #e03f3f;
    line-height: 23px;
    text-align: center;
    position: absolute;
    width: 100%;
    margin-top: 8px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
