import React from 'react'
import './feeling-card.css'

const FeelingCard = () => {
    return (
        <a href='#'>
            <div className='card__container'>
                <div className='card__container-left'>
                    <div className='card__container-left-text'>
                        <h2 className='h2-header'>Meditation</h2>
                        <p className='p-text'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less no</p>
                    </div>
                    <div className='card__container-left-feelings'>
                        <div className='card__container-feeling-container'>
                            <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className='feeling-image' />
                        </div>
                        <div className='card__container-feeling-container'>
                            <img src="https://www.freepnglogos.com/uploads/smile-png/smile-mother-badge-honor-jewish-mom-6.png" className='feeling-image' />
                        </div>
                    </div>

                </div>
                <div className='card__container-right'>
                    <div className='card__container-right-image-container'>
                        <img src='https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=2000' className='right-image' />
                    </div>
                    <h3 className='p-text'>07.12.2022</h3>
                </div>
            </div>
        </a>

    )
}

export default FeelingCard