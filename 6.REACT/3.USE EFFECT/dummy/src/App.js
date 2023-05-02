import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [text, setText] = useState('');
  const [name, setName] = useState('');

  // variation 1-->Every Render
  // useEffect(()=>{
  //   console.log('UI rendering');
  // })

  //variation 2-->First Render
  // useEffect(()=>{
  //   console.log('UI rendering');
  // },[]);
  //this is the array of dependency

  //variation 3-->First Render + whenever dependency changes
  // useEffect(()=>{
  //   console.log('UI rendering');
  // },[text]);

// variation 4-->to handle unmounting of component
  useEffect(()=>{
    console.log('listener added');
    return(()=>{
      console.log('listener removed')
    })
  },[text]);
  // In this case 4 return statement gets executed first don't get confused when you see lisetener added first in cosole after type in input field you can see listener removed executed first then listener added
  

  

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className='app'>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
