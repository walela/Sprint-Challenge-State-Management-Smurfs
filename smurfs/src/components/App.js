import React, { Component } from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore()
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Provider store={store}>
          <div className='App'>
            <h1>SMURFS! 2.0 W/ Redux</h1>
          </div>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
