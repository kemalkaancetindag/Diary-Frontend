import React from 'react'
import './app-bar.css'


const AppBar = () => {
    return(
        <div className='appbar__container'>
         <h2>How Are You Feeling Today?</h2>
         <a href='/write'>
             <img src='https://cdn-icons.flaticon.com/png/512/3271/premium/3271154.png?token=exp=1656537616~hmac=2756c6bf6ffe926632ce473f292016f0'/>
         </a>
        </div>
    )
}


export default AppBar