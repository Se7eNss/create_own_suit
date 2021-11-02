import React,{useState} from 'react'
import './jacket.css'
import { useDispatch, useSelector } from "react-redux";
import { TStore } from '../../../../../store';


const JacketAndPants:React.FC = () => {
    const {jacket} = useSelector((state:TStore)=>state.jacketReducer)

    
    return (
        <>
        <div className="jacket-wrapper ">
            <img src={jacket.preview_front_url}  alt="" />
        </div>
        <div className="pants-wrapper ">
        <img src="/asset/default-img/hanger.png" alt="" />
        </div>
        <div className="pants-wrapper ">
            <img loading="lazy" src={jacket.pants_url} alt="" />
        </div>

       
        </>
    )
}

export default JacketAndPants
