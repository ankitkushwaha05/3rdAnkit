import React from 'react'

function btnClicked(){
  console.log("i am clicked");
}

export const App = () => {
  return (
    <div>

      <button onDoubleClick={btnClicked}>Clisk here</button>
      <button onClick={function(){
        console.log("hello anknit");
      }}>ankit</button>
      <h1>this is button</h1>
      <input onChange={function(){
        console.log("this is input click")
      }} type="text" placeholder='Enter name' />
    </div>
  )
}
export default App;