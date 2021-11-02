import React from 'react'
import { useSelector } from 'react-redux'
import { TStore } from '../../../../../store'
import './shirt.css'
const Shirt = () => {
    const { shirt } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <>
        <div className="shirts-collar-wrapper">
            <img src={shirt.preview_collar_url} alt="" />
        </div>
        <div className="shirts-wrapper">
            <img src={shirt.preview_full_url} alt="" />
        </div>
        <div className="shirts-wrapper">
            <img src={shirt.preview_tail_url} alt="" />
        </div>
        </>
            )
}

export default Shirt
