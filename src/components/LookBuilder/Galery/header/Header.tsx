import React, { useState } from 'react';
import "./header.css";
import {CgClose} from "react-icons/all";

export default function Header() {
    const [headerTitle,setHeaderTitle] = useState('JACKET & PANTS');

    return (
        <div className="col-12 h6 header-container">
            <div className="header-title">{headerTitle}</div>
            <CgClose/>
        </div>
    )
}
