import React from 'react'
import './back-in-time.css'


const BackInTime = () => {
    return (
        <div className='back__card_container'>
            <div className='back__card-header'>
                <select className='date__select'>
                    <option>January</option>
                </select>
                <h2 className='p-text'>Back In Time</h2>
                <select className='date__select'>
                    <option>2022</option>
                </select>
            </div>
            <div className='back__card-body'>
                <div className='date__container'>
                    <div className='date__container-inner'>
                        <h2 className='p-text'>Monday</h2>
                        <h3 className='p-text'>21</h3>
                    </div>

                </div>
                <div className='date__container'>

                    <div className='date__container-inner'>
                        <h2 className='p-text'>Tuesday</h2>
                        <h3 className='p-text'>22</h3>
                    </div>

                </div>



            </div>




        </div>
    )
}

export default BackInTime
