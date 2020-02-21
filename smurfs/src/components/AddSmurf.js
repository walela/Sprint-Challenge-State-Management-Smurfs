import React, { useState } from 'react'
import { Button, Stack, Input } from '@chakra-ui/core'
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
    <div className="add-smurf">
      <Stack spacing={3} w={360}>
        <Input id='name' name='name' value={name} placeholder='Name' onChange={handleChange} />
        <Input id='age' name='age' value={age} placeholder='Age' onChange={handleChange} />
        <Input
          id='height'
          name='height'
          value={height}
          placeholder='Height'
          onChange={handleChange}
        />
        <Button variantColor='teal' w={100} size='lg' onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </div>
  )
}

export default connect(state => state, actions)(AddSmurf)
