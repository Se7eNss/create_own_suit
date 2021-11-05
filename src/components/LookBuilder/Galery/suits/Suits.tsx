import React, {useState} from 'react'
import "./suits.css";
import suits from '../../../../data/suits.json'
import { useDispatch, useSelector } from "react-redux";
import { changeSuit, changeCategory, changeVest, changeTie, changeSocks, changeBelt, changeShoes, changeShirt, changebigPreivew } from '../../../../slices/jacket';
import { AiOutlineClear, AiOutlineSearch ,CgClose,FiCheck } from "react-icons/all";
import { TStore } from '../../../../store';

export default function Suits() {

    const [selectedSuit, setSelectedSuit] = useState('');

    var suit = suits;
    const dispatch = useDispatch();
    const { category, jacket, vest } = useSelector((state: TStore) => state.jacketReducer);
    
  
    const handleClick = (j: string | any, c: string, p: string | any, n: string, pr: string, scol: string | any, stail: string | any, g:string) => {

        if (category === 'jacket') {
            dispatch(changeSuit({ preview_front_url: j, preview_full_url: c, pants_url: p, name: n, price: pr ,galery_url:g }))
        }
        if (category === 'shirt') {
            dispatch(changeShirt({ preview_collar_url: scol, preview_tail_url: stail, preview_full_url: c, name: n, price: pr ,galery_url:g}))

        }
        if (category === 'vest') {
            dispatch(changeVest({ preview_front_url: j, preview_full_url: c, name: n, price: pr ,galery_url:g}))
        }
        if (category === 'tie') {
            dispatch(changeTie({ preview_full_url: c, name: n, price: pr ,galery_url:g }))
        }
        if (category === 'socks') {
            dispatch(changeSocks({ preview_full_url: c, name: n, price: pr ,galery_url:g }))
        }
        if (category === 'belt') {
            dispatch(changeBelt({ preview_full_url: c, name: n, price: pr ,galery_url:g}))
        }
        if (category === 'shoes') {
            dispatch(changeShoes({ preview_full_url: c, name: n, price: pr ,galery_url:g}))
        }
    }

    const changeLook = (j : Array<string> | any) => {
        setSelectedSuit(j.preview_full_url);
    }
    return (
        <div className="suits-container col-12">
            <div className="suits none" onClick={() => { handleClick('',` /asset/default-img/default-${category}.png`, '', '', '', '', '','');}}>
                <div className={category === 'jacket' ? ("none-icon"): ("v-none-icon")}><AiOutlineClear className="icon" /></div>
                <div className="comment">None</div>
            </div>
            {suit.filter(a => a.category === category).map((j) => (
                <div className="suits" onClick={() => {handleClick(j.preview_front_url, j.preview_full_url, j.pants_url, j.name, j.price, j.preview_collar_url, j.preview_tail_url,j.galery_url); changeLook(j)}} >
                    {category === 'jacket' ? [
                        selectedSuit === j.preview_full_url ?(
                            <>  
                                
                                <div className="img-container">
                                    <img className="img" src={j.galery_url} alt="s" />
                                    <div className="long-search-icon"><AiOutlineSearch /></div>
                                    <div className="delete-icon"><CgClose/></div>
                                </div>
                                <div id="long" className="comment-long">
                                    <div className="suit-name">{j.name}</div>
                                    <div className="rent-cost">Rent <div className="blank"></div> {j.price} $ </div>
                                    <div className="confirm"><FiCheck /> Confirm</div>
                                </div>
                                </>
                        ):(
                            <>
                                <div className="img-container">
                                    <img className="img" src={j.galery_url} alt="s" />
                                    <div className="search-icon"><AiOutlineSearch /></div>
                                </div>
                                <div className="comment">
                                    <div className="suit-name">{j.name}</div>
                                    <div className="rent-cost">Rent ${j.price} </div>
                                </div>
                            
                            </>
                            )
            
                    ]:[selectedSuit === j.preview_full_url ?(
                        <>  
                            
                            <div className="v-img-container">
                                <img className="v-img" src={j.galery_url} alt="s" />
                                <div className="v-long-search-icon"><AiOutlineSearch /></div>
                                <div className="v-delete-icon"><CgClose/></div>
                            </div>
                            <div id="long" className="v-comment-long">
                                <div className="v-suit-name">{j.name}</div>
                                <div className="v-rent-cost">Rent <div className="blank"></div> {j.price} $ </div>
                                <div className="v-confirm"><FiCheck /> Confirm</div>
                            </div>
                            </>
                    ):(
                        <>
                            <div className="v-img-container">
                                <img className="v-img" src={j.galery_url} alt="s" />
                                <div className="v-search-icon"><AiOutlineSearch /></div>
                            </div>
                            <div className="v-comment">
                                <div className="v-suit-name">{j.name}</div>
                                <div className="v-rent-cost">Rent ${j.price} </div>
                            </div>
                        
                        </>
                        )]}
                    
                

                
               </div> 
            ))}

        </div>
    )
}
