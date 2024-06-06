import { useEffect, useState } from 'react';
// 外部檔案
import axios from 'axios';

import logo from '../css/logo.svg';
import '../css/App.css';
import Input from './Input';
import '../css/all.css';


import $ from "jquery";


function App() {
  const [inputValue, setInputValue] = useState(" ");
  const [inputValue2, setInputValue2] = useState(" ");
  
  // 網頁初始化(開啟網頁時執行)
  useEffect(() => {
    (async () => {
      const result = await axios.get('https://randomuser.me/api/');
      console.log(result);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button type="button" class="btn btn-primary" onClick={() => {
          $(function () {
            alert("jquery")
          })
        }}>btn</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="testId" text="USER ID" value={inputValue} onChangeHandler={(e) => {
          setInputValue(e.target.value);
        }} />
        <Input id="testId2" text="USER ID2" value={inputValue2} onChangeHandler={(e) => {
          setInputValue2(e.target.value);
        }} />
      </header>
    </div>
  );
}

export default App;
