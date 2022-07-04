import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { State } from "../../state/reducers";
import './write-image-area.css'

const WriteImageArea = () => {
    const [images, setImages] = useState<any[]>([])

    const dispatch = useDispatch()
    const siteState = useSelector((state: State) => state.site)
    const { setFieldForNewDiary } = bindActionCreators(actionCreators, dispatch)

    console.log(siteState)

    const setField = (e: React.SyntheticEvent, files:any[]) => {
               
        setFieldForNewDiary({ field: "diary_images", value: files })
    }

    return (
        <div className="image__area-container">
            <div className="image__box">
                <div className="plus__container">
                    <input type="file" className="image__input" onChange={(e) => {
                        setImages([...Array.from(e.currentTarget.files || []), ...images])
                        setField(e,images)
                    }} multiple />
                    <img src="https://cdn-icons.flaticon.com/png/512/1176/premium/1176432.png?token=exp=1656540109~hmac=5de6d98605aa913aabd55a5d513e12c9" className="plus" />
                </div>


            </div>
            {siteState.unSavedDiary.diary_images !== undefined ? siteState.unSavedDiary.diary_images.map((image:File) => (
                <div className="image__box">
                    <div className="plus__container">
                        <img src={URL.createObjectURL(image)} className="write__image-image" />
                    </div>


                </div >

            )) : null}






        </div >
    )
}

export default WriteImageArea