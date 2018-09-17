import React from 'react'
import StatusBar from './StatusBar'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('StatusBar component', () => {

  describe('on initial render', () => {
    it('will not be displayed', ()=> {
      const todos = []
      const statusBar = shallow(<StatusBar todos={[]}/>)

      expect(statusBar.find('.hidden').length).toEqual(1)
      expect(statusBar.find('.status-bar').length).toEqual(0)
    })
  })

  describe('when there is a todo list', () => {
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
    const statusBar = shallow(<StatusBar todos={todos}/>)

    expect(statusBar.find('.hidden').length).toEqual(0)
    expect(statusBar.find('.status-bar').length).toEqual(1)

    const itemCount = statusBar.find('.item-count')
    expect(itemCount.text().trim()).toEqual('2 items,')

    const completedCount = statusBar.find('.completed-count')
    expect(completedCount.text().trim()).toEqual('1 completed')
  })

})
