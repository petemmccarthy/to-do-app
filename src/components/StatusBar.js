import React from 'react'
import styled from 'styled-components'

const StatusBarWrapper  = styled.div`
  text-align: center;
  padding: 5px 0px 5px 0px;
`

const StatusBar = props => (
  <StatusBarWrapper>
    <div>
      <span>
        {props.todos.length} item{props.todos.length === 1 ? ' ' : 's '}
      </span>
      <span>
        {props.todos.filter( todo => todo.completed === true).length} completed
      </span>
    </div>
  </StatusBarWrapper>
)

export default StatusBar
