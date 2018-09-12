import React from 'react'
import styled from 'styled-components'

const TitleWrapper  = styled.h2`
  text-align: center;
  margin: 50px 0px 15px 0px;
`

const Title = () => (
  <TitleWrapper>
    <header className="header">
      <h2>My ToDo List</h2>
    </header>
  </TitleWrapper>
)

export default Title
