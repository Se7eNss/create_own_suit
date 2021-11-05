import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { changebigPreivew, changeLook } from '../../../slices/jacket'
import './bigPreview.css'
import Belt from './parts/belt/Belt'
import JacketAndPants from './parts/jacket-and-pants/JacketAndPants'
import Shirt from './parts/shirt/Shirt'
import Shoes from './parts/shoes/Shoes'
import Socks from './parts/socks/Socks'
import Tie from './parts/tie/Tie'
import Vest from './parts/vest/Vest'
const BigPreview = () => {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(changebigPreivew({bigPreview:false}))
        dispatch(changeLook({look:false}))
    }
    const handleClickV=()=>{
        dispatch(changebigPreivew({bigPreview:false}))
        dispatch(changeLook({look:true}))
    }
    return (
        <div className="container-fluid">
            <div className="row pt-5">
                <p className="head">Select an Item
                <hr className="hr"/>
                </p>
                
            </div>
            <div className="row  pad">
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
            <div className="bottom-btn-pre offset-md-3 offset-2 col-md-6 col-8 ">
                <div className="row">
                <div className="cancel-btn-pre col-3" onClick={handleClick}>CANCEL</div>      
                <div className="save-btn-pre col-9" onClick={handleClickV}><FiCheck /></div>
                </div>
               
            </div>
            
        </div>
    )
}

export default BigPreview
