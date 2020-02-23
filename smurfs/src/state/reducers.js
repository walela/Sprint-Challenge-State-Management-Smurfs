import { ADD_SMURF, DELETE_SMURF, FETCH_SMURFS } from './actionTypes'

const initialSmurfList = []
const smurfsReducer = (state = initialSmurfList, action) => {
  console.log('smurfsReducer', state, action)
  switch (action.type) {
    case ADD_SMURF:
    case DELETE_SMURF:
    case FETCH_SMURFS:
      return action.payload
    default:
      return state
  }
}

export { smurfsReducer }
