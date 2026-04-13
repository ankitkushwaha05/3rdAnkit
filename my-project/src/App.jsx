import React from 'react'

// function btnClicked(){
//   console.log("i am clicked");
// }
//  function inputChanging(elem) {
//         console.log(val);
        
//       }
export const App = () => {
  return (
    <div>

      {/* <button onDoubleClick={btnClicked}>Clisk here</button>
      <button onClick={function(){
        console.log("hello anknit");
      }}>ankit</button>
      <h1>this is button</h1> */}

     
      {/* <input onChange={function(elem){
        console.log(elem.target.value)
      }} 
      type="text"
      placeholder='Enter name' /> */}
      <div onMouseMove={() =>{
        console.log('elem');
      }} className='box'></div>

    </div>
  )
}
export default App;

// chal coffee piwayenge 
// gama me light ko ni aandi
// bistara makhmal ke nhi mite
// chal chandigarh ghuma lau
