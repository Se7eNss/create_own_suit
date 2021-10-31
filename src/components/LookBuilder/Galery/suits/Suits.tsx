import React from 'react'
import "./suits.css";
import suits from '../../../../data/suits.json'
import { useDispatch, useSelector } from "react-redux";
import { changeSuit,changeCategory } from '../../../../slices/jacket';
import {AiOutlineClear , AiOutlineSearch} from "react-icons/all";
import { TStore } from '../../../../store';
export default function Suits() {
        var suit = suits;
        const dispatch = useDispatch();
        const {category,jacket} = useSelector((state:TStore)=>state.jacketReducer)
    return (
        <div className="suits-container col-12">
            <div className="suits none" >
                <div className="none-icon"><AiOutlineClear className="icon"/></div>
                <div className="comment">None</div>
            </div>
            <button onClick={()=>dispatch(changeCategory({category:'vest'}))}>asdsa</button>
            {suit.filter(j=>j.category===category).map((j)=>(
                <div className="suits" onClick={()=>dispatch(changeSuit({j_preview_front_url:j.preview_front_url , preview_front_url:j.preview_front_url}))} >
                    <div className="img-container">
                        <img className="img" src={j.galery_url} alt="s" />
                        <div className="search-icon"><AiOutlineSearch/></div>
                        </div>
                    <div className="comment">
                        <div className="suit-name">{j.name}</div>
                        <div className="rent-cost">Rent ${j.price} </div>
                    </div>
                </div>
            ))}
            
           
           
        </div>
    )
}
