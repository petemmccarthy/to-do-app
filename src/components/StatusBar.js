import React from 'react'
import styled from 'styled-components'

const StatusBarWrapper  = styled.div`
  text-align: center;
`

const StatusBar = props => (
  <StatusBarWrapper>
    <ul>
      {props.todos.length} item{props.todos.length === 1 ? '' : 's'} left
    </ul>
  </StatusBarWrapper>
)

export default StatusBar
