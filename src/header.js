import React from "react"; 

export default function Header(props){
   let heading = props.score>=5 ?  <h2 className="confetti">impressive!  you scored {props.score}🎉🎉</h2>:<h2>score: {props.score}</h2>
    return(
       
     <div>
        <h1 className='heading'>Entertainment Trivia 👩‍🎓 </h1> 
        {heading}
     </div>        

       )
}