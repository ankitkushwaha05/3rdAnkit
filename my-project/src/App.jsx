import React, { useState } from 'react'

export const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form submited");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name' onChange={(e)=>{
          console.log("e.target.value");
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App 