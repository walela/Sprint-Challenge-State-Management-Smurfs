import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actionCreators'
import uuid from 'uuid'

const AddSmurf = ({ addSmurf }) => {
  const initialFormValue = {
    name: '',
    age: '',
    height: '',
    id: uuid(),
  }
  const [inputValues, setInputValues] = useState(initialFormValue)
  const { name, age, height } = inputValues

  const handleChange = e => {
    setInputValues({
      ...inputValues,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addSmurf({
      name: inputValues.name,
      age: Number(inputValues.age),
      height: inputValues.height + 'cm',
      id: inputValues.id,
    })
    setInputValues(initialFormValue)
  }

  return (
    <React.Fragment>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} onChange={handleChange} />
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' name='age' value={age} onChange={handleChange} />
        <label htmlFor='height'>Height</label>
        <input type='text' id='height' name='height' value={height} onChange={handleChange} />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </React.Fragment>
  )
}

export default connect(state => state, actions)(AddSmurf)
