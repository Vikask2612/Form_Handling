
// Form handling:
// as AS
// "use client"
// import React from 'react';
import {useState} from 'react'

const App = () => {
  const [username, setUsername] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault();                      
    console.log(username);     
    setUsername('');                
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
      >                             
                                    
        <input                      
        value={username}
         onChange={(e)=>{
          setUsername(e.target.value);
         }}
         className='px-5 py-3 rounded text-white bg-black text-xl text
         text-bold border-black'
         placeholder='Enter Your Text'
        />

         <button className='px-5 py-3 ml-5 bg-blue-950 text-bold text-white
          rounded'>
          BUTTON 
         </button>
      </form>
    </div>                   
  )
}

export default App