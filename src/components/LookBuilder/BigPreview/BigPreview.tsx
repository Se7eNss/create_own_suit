import React from 'react'
import './bigPreview.css'
import Belt from './parts/belt/Belt'
import JacketAndPants from './parts/jacket-and-pants/JacketAndPants'
import Shirt from './parts/shirt/Shirt'
import Shoes from './parts/shoes/Shoes'
import Socks from './parts/socks/Socks'
import Tie from './parts/tie/Tie'
import Vest from './parts/vest/Vest'
const BigPreview = () => {
    return (
        <div className="container-fluid">
            <div className="row pt-5">
                <p className="head">Select an Item
                <hr className="hr"/>
                </p>
                
            </div>
            <div className="row p-5 pt-3">
                <Socks/>
                <Tie/>
                <Shirt/>
                <Vest/>
                <JacketAndPants/>
            </div>
            <div className="row p-5 pt-0 down">
                <Shoes/>
                <Belt/>
            </div>
        </div>
    )
}

export default BigPreview
