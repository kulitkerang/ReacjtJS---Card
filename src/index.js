import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Card = (props) =>{
  return(
    <div class="Card">
      <p class="tittle">{props.name}</p>
      <p>{props.job}</p>
    </div>
  )
}

const App = () =>{
  return (
    <div>
      <Card name="Kulit Kerang" job="Frontend"/>
      <Card name="Sapi Bakar" job="Backend"/>
      <Card name="Gajah Mada" job="Project Manager"/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
