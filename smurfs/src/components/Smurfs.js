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
          <div className="smurfs" key={item.id}>
            <h2>Name: {item.name}</h2>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
            <button type='button' onClick={() => deleteSmurf(item.id)}>
              Delete Smurf
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default connect(state => state, actions)(Smurfs)
