import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submit } from './redux/FormSlice'

function Form() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  return (
    <div>
      <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
      <button onClick={(e) => dispatch(submit({ name }))}>submit</button>
    </div>
  )
}

export default Form
