import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import WriteImageArea from "../components/write-image-area/WriteImageArea";
import WriteTextArea from "../components/write-text-area/WriteTextArea";
import WriteTextInput from "../components/write-text-input/WriteTextInput";


const Write = () => {
    return (
        <div className='app__container'>
            <div className='app__container-left'>
                <Sidebar />
            </div>

            <div className='app__container-right'>      
                <WriteTextInput/> 
                <WriteImageArea/>    
                <WriteTextArea/>    
            </div>

        </div>
    )
}

export default Write