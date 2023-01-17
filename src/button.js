import React  from "react";
import Question  from "./question";

export default function Button(props){
    // props.setDisabled(prevAction=> !prevAction)
    let text = props.score >= 5 ? "FINISHED" : "NEXT QUESTION"
    let bool = text==="FINISHED"? true : false
    

    return(
        <div>
            <button onClick={props.handleButton} disabled={bool} className="button"
            >{text}</button>

        </div>
    )

}