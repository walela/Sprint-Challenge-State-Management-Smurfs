import * as types from './actionTypes'
import axios from 'axios'

const baseURL = 'http://localhost:3333'

const action = (type, payload) => {
  return {
    type,
    payload,
  }
}

const fetchSmurfs = () => dispatch => {
  axios
    .get(`${baseURL}/smurfs`)
    .then(res => {
      dispatch(action(types.FETCH_SMURFS, res.data))
    })
    .catch(err => console.log(err))
}

const addSmurf = smurf => dispatch => {
  axios
    .post(`${baseURL}/smurfs`, smurf)
    .then(res => {
      dispatch(action(types.ADD_SMURF, res.data))
    })
    .catch(err => console.log(err))
}

const deleteSmurf = id => dispatch => {
  axios
    .delete(`${baseURL}/smurfs/${id}`)
    .then(res => {
      dispatch(action(types.DELETE_SMURF, res.data))
    })
    .catch(err => console.log(err))
}

export { fetchSmurfs, addSmurf, deleteSmurf }
