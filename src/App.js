import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [name,setName] = useState('love')

  //variation 01 - every rendering call each time call but no dependency [] parameter
  // useEffect(()=>{
  //   console.log('UI rendering done')
  // });

  //variation 02 - first render - only first time print
  // useEffect(()=>{
  //   console.log('UI rendering done')
  // },[]);

  //variation 03 - on the first render + whenever dependency changes | look like first variation
  useEffect(() => {
    console.log('change observed')
  }, [name]);   // change observe - when name value change

  function changeHandler(eve) {
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
