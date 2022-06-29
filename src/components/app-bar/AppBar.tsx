import React from 'react'
import './app-bar.css'


interface Props{
    header: string
}

const AppBar = ({header}:Props) => {
    return(
        <div className='appbar__container'>
         <h2>{header}</h2>
         <a href='/write'>
             <img src='https://cdn-icons.flaticon.com/png/512/3271/premium/3271154.png?token=exp=1656537616~hmac=2756c6bf6ffe926632ce473f292016f0'/>
         </a>
        </div>
    )
}


export default AppBar