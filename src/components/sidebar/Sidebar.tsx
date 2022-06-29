import React, { useState } from 'react'
import './sidebar.css'

const Sidebar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

    return (
        <nav className='sidebar__container'>
            <ul>
                <li>
                    <a href='#'>Profile</a>
                </li>
                <li>
                    <a href='#'>Timeline</a>
                </li>              
            </ul>

        </nav>

    )
}

export default Sidebar