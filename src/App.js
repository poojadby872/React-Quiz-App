// import logo from './logo.svg';
import React, { useEffect } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import './App.css';
import Header from './header';
import Question  from './question';
import Button  from './button';




function App() {
  const [filmData,setFilmData] = React.useState([])
  const [count,setCount] = React.useState(0)
  const [score,setScore] = React.useState(0)
  const [disabled,setDisabled]= React.useState(false) 


  
  useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=5&category=11`)
     .then(res=>res.json())
     .then(data=> setFilmData(data.results))
      
  },[count])

function increment(){
  setCount(prevCount=> prevCount + 1)
  setDisabled(prev=> !prev)
  // if (count === 10) {


  // }

}

  return (
  <div>
    <p className='close'>X</p>
    <div className="App"> 
      <Header score={score} />
      <Question disabled={disabled} setDisabled={setDisabled} setScore={setScore} data={filmData} />
      <Button handleButton={increment} disabled={disabled} score={score} />
    </div>
  </div>
    );
}

export default App;
