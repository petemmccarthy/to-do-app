import React from 'react'
import Title from './Title'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Title', () => {
  it('Should render the title header', () => {
    const title = shallow(<Title />)
    expect(title.containsMatchingElement(<h4>My ToDo List</h4>)).toEqual(true);
  })
})
