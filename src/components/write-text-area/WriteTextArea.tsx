import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { State } from "../../state/reducers";
import './write-text-area.css'

const WriteTextArea = () => {
    const [content, setContent] = useState<string>("")

    const dispatch = useDispatch()
    const siteState = useSelector((state:State) => state.site)
    const {setFieldForNewDiary} = bindActionCreators(actionCreators,dispatch)

    const setField = (e: React.SyntheticEvent) => {
        setFieldForNewDiary({field:"content",value:(e.currentTarget as HTMLTextAreaElement).value})
    } 

    return(
        <textarea className="write__text-area" placeholder="Tell me..." value={content} onBlur={(e) => setField(e)} onChange={(e) => setContent(e.target.value)}/>
    )
}

export default WriteTextArea
