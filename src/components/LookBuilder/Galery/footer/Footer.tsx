import React from 'react'
import "./footer.css";
import {RiArrowLeftFill,TiArrowSortedUp} from "react-icons/all";

export default function Footer() {
    return (
        <div className="col-12 h6 footer-container">
            <RiArrowLeftFill className="col icons"/>
            <TiArrowSortedUp className="col icons"/>
        </div>
    )
}
