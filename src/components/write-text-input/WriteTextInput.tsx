import React from "react";
import './write-text-input.css'



const WriteTextInput = () => {
    return(
        <div className="write__text-input-container">
            <div className="write__text-input-container-inner">
            <input className="write__text-input" placeholder="Do you have a title for today? "/>
            <button>Set Mood</button>
            </div>
       

        </div>
        
    )
}

export default WriteTextInput