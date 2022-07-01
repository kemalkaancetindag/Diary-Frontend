import React from "react";
import './profile-person.css'

const ProfilePerson = () => {
    return(
        <div className="person__container">
           <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" className="person__image"/>
            <div className="info-container">
                <span>Name</span>
                <h3>Kemal Kaan Çetindağ</h3>
            </div>
            <div className="info-container">
                <span>Birth Date</span>
                <h3>07.12.2000</h3>
            </div>
            <div className="info-container">
                <span>Horoscope</span>
                <h3>Oğlak</h3>
            </div>
            <div className="info-container">
                <span>Mail</span>
                <h3>mail@mail.com</h3>
            </div>
            <div className="info-container">
                <span>Mostly Feeling</span>
                <h3>Happy</h3>
            </div>
        </div>
    )
}


export default ProfilePerson