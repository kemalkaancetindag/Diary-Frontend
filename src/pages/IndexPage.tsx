import React from 'react'
import '../App.css';
import AppBar from '../components/app-bar/AppBar';
import BackInTime from '../components/back-in-time/BackInTime';
import FeelingCard from '../components/feeling-card/FeelingCard';
import Sidebar from '../components/sidebar/Sidebar';




const IndexPage = () => {
    return (
        <div className='app__container'>
            <div className='app__container-left'>
                <Sidebar />
            </div>

            <div className='app__container-right'>
                <AppBar header='How Are You feeling Today?'/>
                <BackInTime />
                <FeelingCard />
            </div>

        </div>
    )
}

export default IndexPage