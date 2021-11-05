import React from 'react'
import './socks.css'
import {  useSelector,useDispatch } from "react-redux";
import { TStore } from '../../../../../store';
import { changeCategory,changebigPreivew, changeLook } from '../../../../../slices/jacket';
const Socks = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'socks'}))
        dispatch(changebigPreivew({bigPreview:false}))
        dispatch(changeLook({look:false}))
    }
    const dispatch = useDispatch()
    const { socks } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="col-1 m-2">
            <div className="pointer-socks" onClick={handleClick}>
                <p className="text-center header">Socks
                    <hr />
                </p>
                <div className="bprv_socks_wrapper " style={{ backgroundImage: `url(${socks.preview_full_url})` }}>
                </div>
            </div>
        </div>
    )
}

export default Socks
