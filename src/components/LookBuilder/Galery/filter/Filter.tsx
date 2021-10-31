import React from 'react';
import "./filter.css";
import {TiArrowSortedDown} from "react-icons/all";

export default function Filter() {

    return (
        <div className="col-12 h6 filter-container">
            <div className="filter-title">FILTERS</div>
            <TiArrowSortedDown/>
        </div>
    )
}