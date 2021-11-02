import React from 'react'
import './socks.css'
import {  useSelector } from "react-redux";
import { TStore } from '../../../../../store';
const Socks = () => {
    const { socks } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="socks-wrapper ">
            <img src={socks.preview_full_url} alt="" />
        </div>
    )
}

export default Socks
