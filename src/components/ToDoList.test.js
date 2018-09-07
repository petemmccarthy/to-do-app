import React from 'react'
import ToDoList from './ToDoList'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ToDoList component', () => {

  describe('when first rendered', () => {
    it('should not render any todos' , () => {
      const toDoList = shallow(<ToDoList todos={[]}/>)
      expect(toDoList.find('ul').length).toEqual(0)
    })
  })

  describe('when a todo list has been created', () => {
    const todos = [
      {
        id: 1,
        item: 'first item',
        completed: true
      },
      {
        id: 2,
        item: 'second item',
        completed: false
      }
    ]

    const deleteToDoItemSpy = jest.fn()
    ToDoList.prototype.deleteToDoItem = deleteToDoItemSpy

    const toDoList = shallow(<ToDoList todos={todos} onClick={deleteToDoItemSpy} />)

    it('should render the complete list of todos', () => {
      expect(toDoList.find('ul').length).toEqual(todos.length)
    })

    it('should mark completed todos', () => {
      expect(toDoList.find('.completed').length).toEqual(1)
    })

    it('should call deleteToDoItem when delete button clicked', ()=> {
      const deleteButton = toDoList.find('button').first()
      deleteButton.simulate('click')
      expect(deleteToDoItemSpy).toHaveBeenCalledTimes(1)
    })
  })

})
