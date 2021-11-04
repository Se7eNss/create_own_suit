import React, { useState } from 'react';
import "./header.css";
import {CgClose} from "react-icons/all";
import { TStore } from '../../../../store';
import { useSelector } from 'react-redux';

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
    

    return (
        <div className="col-12 h6 header-container">
            <div className="header-title">{header(category)}</div>
            <CgClose/>
        </div>
    )
}
