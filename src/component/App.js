import { useState } from 'react';
import logo from '../css/logo.svg';
import '../css/App.css';
import Input from './Input';

function App() {
  const [inputValue,setInputValue] =useState(" ") ;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="testId" text="USER ID" value={inputValue} onChangeHandler={(e)=>{
          setInputValue(e.target.value);
        }}/>
      </header>
    </div>
  );
}

export default App;