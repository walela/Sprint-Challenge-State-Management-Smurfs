import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { smurfsReducer } from '../state/reducers'

import Smurfs from './Smurfs'
import AddSmurf from './AddSmurf'

const rootReducer = combineReducers({
  smurfs: smurfsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className='App'>
          <h1>The Smurfs!</h1>
          <AddSmurf />
          <Smurfs />
        </div>
      </Provider>
    </ThemeProvider>
  )
}

export default App
