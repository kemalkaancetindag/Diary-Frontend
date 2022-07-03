import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { State } from "../../state/reducers";
import './write-text-input.css'



const WriteTextInput = () => {
    const [title, setTitle] = useState<string>("")

    const dispatch = useDispatch()
    
    const {setFieldForNewDiary} = bindActionCreators(actionCreators, dispatch)
    const siteState = useSelector((state:State) => state.site)

    console.log(siteState)

    const setField = () => {
        setFieldForNewDiary({field:"title",value:title})        
    }


    return(
        <div className="write__text-input-container">
            <div className="write__text-input-container-inner">
            <input className="write__text-input" placeholder="Do you have a title for today? " onBlur={() => setField()} value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button>Set Mood</button>
            </div>
       

        </div>
        
    )
}

export default WriteTextInput