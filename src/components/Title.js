import React from 'react'
import styled from 'styled-components'

const TitleWrapper  = styled.div`
  text-align: center;
  font-size: 30px;
  margin: 50px 0px 15px 0px;
`

const Title = () => (
  <TitleWrapper>
    <h4>My ToDo List</h4>
  </TitleWrapper>
)

export default Title
