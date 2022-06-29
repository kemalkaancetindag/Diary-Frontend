import React from "react";
import './profile-person.css'

const ProfilePerson = () => {
    return(
        <div className="person__container">
            <div className="person__container-left">
                <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" className="person__image"/>
            </div>
            <div className="person__container-right">
                <div className="person__container-right-name-row">
                    <h1>Kemal Kaan Çetindağ</h1>

                </div>

            </div>

        </div>
    )
}


export default ProfilePerson