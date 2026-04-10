import React from 'react'

function btnClicked(){
  console.log("i am clicked");
}

export const App = () => {
  return (
    <div>App

      <button onClick={btnClicked}>Clisk here</button>
    </div>
  )
}
