import React from 'react'
import styled from 'styled-components'

const HeaderWrapper  = styled.div`
  font-style: italic;
`

const Header = (props) => (
  <HeaderWrapper>
    <h1>To do list</h1>
  </HeaderWrapper>
)

export default Header
