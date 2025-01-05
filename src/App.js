import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text,setText] = useState('');

  //variation 01 - every rendering use effect call
  useEffect(()=>{
    console.log('UI rendering done')
  },[]);

  function changeHandler(eve){
    console.log(text);
    setText(eve.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
