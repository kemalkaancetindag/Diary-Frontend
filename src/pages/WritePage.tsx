import React, { useEffect } from "react";
import MoodModal from "../components/mood-modal/MoodModal";
import Sidebar from "../components/sidebar/Sidebar";
import WriteImageArea from "../components/write-image-area/WriteImageArea";
import WriteTextArea from "../components/write-text-area/WriteTextArea";
import WriteTextInput from "../components/write-text-input/WriteTextInput";



const Write = () => {
    useEffect(() => {
        window.addEventListener("beforeunload",() => {
            alert("sa")
        })
    }, [])

    return (
        <div className='app__container'>
            <div className='app__container-left'>
                <Sidebar />
            </div>

            <div className='app__container-right'>      
                <WriteTextInput/> 
                <WriteImageArea/>    
                <WriteTextArea/>   
                <MoodModal/> 
            </div>

        </div>
    )
}

export default Write