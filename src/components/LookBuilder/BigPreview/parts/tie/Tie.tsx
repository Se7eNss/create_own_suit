import React from 'react'
import './tie.css'
import {  useSelector ,useDispatch} from "react-redux";
import { TStore } from '../../../../../store';
import { changeCategory,changebigPreivew } from '../../../../../slices/jacket';
const Tie = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'tie'}))
        dispatch(changebigPreivew({bigPreview:false}))
    }
    const dispatch = useDispatch()
    const{tie}=useSelector((state:TStore)=>state.jacketReducer)
    return (
        <div className="col-lg-1 m-2">
            <div className="pointer" onClick={handleClick}>
                <p className="text-center header">Tie
                    <hr />
                </p>
                <div className="bprv_tie_wrapper " style={{ backgroundImage: `url(${tie.preview_full_url})` }}>
                </div>
            </div>
        </div>
    )
}

export default Tie
