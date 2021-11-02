import React from 'react'
import './tie.css'
import {  useSelector } from "react-redux";
import { TStore } from '../../../../../store';
const Tie = () => {
    const {tie} = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="tie-wrapper ">
            <img src={tie.preview_full_url} alt="" />
        </div>
    )
}

export default Tie
