import React from 'react'
import "./suits.css";
import suits from '../../../../data/suits.json'
import { useDispatch, useSelector } from "react-redux";
import { changeSuit,changeCategory ,changeVest , changeTie ,changeSocks, changeBelt,changeShoes,changeShirt} from '../../../../slices/jacket';
import {AiOutlineClear , AiOutlineSearch} from "react-icons/all";
import { TStore } from '../../../../store';
export default function Suits() {
        var suit = suits;
        const dispatch = useDispatch();
        const {category,jacket,vest} = useSelector((state:TStore)=>state.jacketReducer)
        const handleClick= (j: string | any ,c: string  ,p: string |any ,n:string ,pr:string ,scol:string |any , stail:string|any)=> {
            
        if(category === 'jacket'){
            dispatch(changeSuit({preview_front_url:j, preview_full_url:c, pants_url:p, name:n , price:pr}))
        }
        if(category === 'shirt'){
             dispatch(changeShirt({preview_collar_url:scol,preview_tail_url:stail, preview_full_url:c,name:n , price:pr}))
             
        }
        if(category === 'vest'){
            dispatch(changeVest({preview_front_url:j, preview_full_url:c,name:n , price:pr})) 
        }
        if(category === 'tie'){
            dispatch(changeTie({ preview_full_url:c,name:n , price:pr}))
        }
        if(category === 'socks'){
            dispatch(changeSocks({ preview_full_url:c,name:n , price:pr}))
        }
        if(category === 'belt'){
            dispatch(changeBelt({preview_full_url:c,name:n , price:pr}))
        }
        if(category === 'shoes'){
            dispatch(changeShoes({preview_full_url:c,name:n , price:pr}))
        }
        }
    return (
        <div className="suits-container col-12">
            <div className="suits none " onClick={()=>handleClick(``,'','','','','','')}>
                <div className="none-icon"><AiOutlineClear className="icon"/></div>
                <div className="comment">None</div>
            </div>
            {suit.filter(a=>a.category===category).map((j)=>(
                <div className="suits" onClick={()=>handleClick(j.preview_front_url,j.preview_full_url,j.pants_url, j.name ,j.price ,j.preview_collar_url,j.preview_tail_url)} >
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
