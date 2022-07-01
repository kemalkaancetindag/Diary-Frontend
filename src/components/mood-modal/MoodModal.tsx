import React, { useState } from "react";
import './mood-modal.css'

const MoodModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)

    const handleModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={isModalOpen ? "mood__modal-container" : "hidden"}>   
        <span className="close" onClick={handleModal}>&times;</span>         
            <div className="mood__container">
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>
                <div className="mood__block">
                    <div className="mood__part">
                        <img src="https://cdn-icons-png.flaticon.com/512/4220/4220555.png" className="mood__image" />
                        <span>Happy</span>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default MoodModal