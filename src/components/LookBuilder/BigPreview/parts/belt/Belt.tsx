import React from 'react'
import './belt.css'
import {  useSelector,useDispatch } from "react-redux";
import { TStore } from '../../../../../store';
import { changeCategory,changebigPreivew } from '../../../../../slices/jacket';
const Belt = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'belt'}))
        dispatch(changebigPreivew({bigPreview:false}))
    }
    const dispatch=useDispatch()
    const { belt } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="col-lg-2 ">
            <div className="pointer" onClick={handleClick}>
                <p className="text-center header-belt ">Belt & Suspenders
                    <hr />
                </p>
                <div className="bprv_belt_wrapper " style={{ backgroundImage: `url(${belt.preview_full_url})` }}>
                </div>
            </div>
        </div>
    )
}

export default Belt
