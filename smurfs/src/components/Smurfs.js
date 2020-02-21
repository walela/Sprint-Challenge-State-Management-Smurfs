import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actionCreators'

const Smurfs = ({ smurfs, fetchSmurfs, deleteSmurf }) => {
  useEffect(() => {
    fetchSmurfs()
  }, [])
  return (
    <div className='smurfs-list'>
      {smurfs.map(item => {
        return (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
            <button type='button' onClick={() => deleteSmurf(item.id)}>
              Delete Smurf
            </button>
          </li>
        )
      })}
    </div>
  )
}

export default connect(state => state, actions)(Smurfs)
