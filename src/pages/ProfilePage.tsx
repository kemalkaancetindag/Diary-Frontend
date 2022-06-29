import React from "react"
import AppBar from "../components/app-bar/AppBar"
import ProfilePerson from "../components/profile-person/ProfilePerson"
import Sidebar from "../components/sidebar/Sidebar"



const ProfiePage = () => {
    return (
        <div className='app__container'>
            <div className='app__container-left'>
                <Sidebar />
            </div>

            <div className='app__container-right'>
                <AppBar header={'Profile'}/>
                <ProfilePerson/>

            </div>

        </div>
    )
}

export default ProfiePage