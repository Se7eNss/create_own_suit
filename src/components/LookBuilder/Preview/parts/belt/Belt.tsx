import React from 'react'
import { useSelector } from 'react-redux'
import { TStore } from '../../../../../store'
import './belt.css'
const Belt = () => {
    const { belt } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="belts-wrapper ">
            <img src={belt.preview_full_url} alt="" />
        </div>
    )
}

export default Belt
