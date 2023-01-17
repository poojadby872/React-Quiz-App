import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React  from "react";
import Button from './button';
import "./question.css"


export default function Question(props){
    // const index = Math.ceil(Math.random()*10 )
    let value = 0
    let options = []

    props.data.map(item=>options.push(item.correct_answer))
    // const audio = new Audio("./sound/boom.wav");
  //   function playSound(soundfile){
  //     return document.getElementById("sound").innerHTML=`<embed  src="${soundfile}" hidden="true" autostart="true" loop="false"/>`;
  //  }

   
    
    
    function handleOption(e) {
    console.log(e)

    value = options.includes(e.target.value)? value +=1 : value -=1
    console.log(value)
    props.setScore(prevState=> prevState + value)
    options.includes(e.target.value) ? e.target.classList.toggle("correct"):
    e.target.classList.toggle("incorrect")
    props.setDisabled(prevAction=> !prevAction)
    // Audio.play()
    playSound("./sound/boom.wav")
    console.log("button was clicked next")
    console.log(props.disabled)

  
  }
    
    return( 
      props.data.map((item,index)=>
      <>{(index===1) &&
        <div className="container">
         <h3 className="question" key={index} > {item.question}</h3>
          <div className="flex"> 
             {item.incorrect_answers.map((option,index)=>
             <div>
               <button disabled={props.disabled} value={option} onClick={(e)=> handleOption(e)} className={option} key={index}>{option}</button>
               </div>)}
              {<button disabled={props.disabled} name={item.correct_answer} value={item.correct_answer} className={item.correct_answer} key={index} onClick={e=> handleOption(e)}>{item.correct_answer}</button>}
          </div>

        </div>}</>)
      )  


} 