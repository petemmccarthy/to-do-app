import React from 'react'
import styled from 'styled-components'

const StatusBarWrapper  = styled.div`
  text-align: center;
`

const StatusBar = props => (
  <StatusBarWrapper>
    <div className={props.todos.length === 0 ? 'hidden' : 'status-bar'}>
      <span className="item-count">
        {props.todos.length} item{props.todos.length === 1 ? ', ' : 's, '}
      </span>
      <span className="completed-count">
        {props.todos.filter( todo => todo.completed === true).length} completed
      </span>
    </div>
  </StatusBarWrapper>
)

export default StatusBar
