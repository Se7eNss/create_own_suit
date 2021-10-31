import React from 'react'
import { useSelector } from 'react-redux'
import { TStore } from '../../../../../store'
import './vest.css'
const VestAndCummerbund = () => {
    const {vest} = useSelector((state:TStore)=>state.jacketReducer)
    return (
        <div className="vest-wrapper ">
            <img src={vest.preview_front_url} alt="" />
        </div>
    )
}

export default VestAndCummerbund
