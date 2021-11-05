import React from 'react'
import "./footer.css";
import {RiArrowLeftFill,TiArrowSortedUp} from "react-icons/all";
import { useDispatch } from 'react-redux';
import { changeLook } from '../../../../slices/jacket';

export default function Footer() {
    const dispatch = useDispatch()  
    const handleClick =()=>{
        dispatch(changeLook({look:true}))
    }
    return (
        <div className="col-12 h6 footer-container">
            <RiArrowLeftFill className="col icons" onClick={handleClick}/>
            <TiArrowSortedUp className="col icons"/>
        </div>
    )
}
