import React, { Component } from 'react'
import Title from './components/Title'
import ToDosContainer from './components/ToDosContainer'
import './App.css'

import store from './store'
import { Provider } from 'react-redux'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <Title />
          <ToDosContainer />

        </div>
      </Provider>
    )
  }
}
export default App
