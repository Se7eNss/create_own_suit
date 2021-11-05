import React, { useState } from 'react';
import "./header.css";
import {CgClose} from "react-icons/all";
import { TStore } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { changeLook } from '../../../../slices/jacket';

export default function Header() {
    const {category} = useSelector((state:TStore) => state.jacketReducer)
    let header= (cat:string)=>{
        if (cat == 'jacket') {
            return 'JACKET AND PANTS'
        }
        else if(cat == 'belt'){
            return 'BELT AND SUSPENDERS'
        }
        else{return category.toUpperCase()}
    };
    const dispatch = useDispatch()  
    const handleClick =()=>{
        dispatch(changeLook({look:true}))
    }

    return (
        <div className="col-12 h6 header-container" onClick={handleClick}>
            <div className="header-title">{header(category)}</div>
            <CgClose/>
        </div>
    )
}
