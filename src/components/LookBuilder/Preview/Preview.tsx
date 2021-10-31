import React, { useState } from 'react'
import './preview.css'
import JacketAndPants from './parts/jacket-and-pants/JacketAndPants'
import Shirt from './parts/shirt/Shirt'
import Tie from './parts/tie/Tie'
import Shoe from './parts/shoes/Shoe'
import Socks from './parts/socks/Socks'
import VestAndCummerbund from './parts/vest-and-cummebund/VestAndCummerbund'
import Belt from './parts/belt/Belt'
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from '../../../slices/jacket';
const Preview = () =>  {
    const dispatch =useDispatch();
    return (
        <div className="col-5">
            <div className="img-wrapper ">
                <button onClick={()=>dispatch(changeCategory({category:'vest'}))}>sadas</button>
                <JacketAndPants />
                <Shirt/>
                <Tie/>
                <Shoe/>
                <Socks/>
                <VestAndCummerbund/>
                <Belt/>
            </div>
        </div>
    )
}

export default Preview
