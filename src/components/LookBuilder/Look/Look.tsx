import React from 'react';
import './look.css';
import Belt from './part/belt/Belt';
import { useSelector } from 'react-redux';
import { TStore } from '../../../store';
import JacketAndPants from './part/jacketAndPants/JacketAndPants';
import Shirt from './part/shirt/Shirt';
import Shoes from './part/shoes/Shoes';
import Socks from './part/socks/Socks';
import Tie from './part/tie/Tie';
import Vest from './part/vest/Vest';

export default function Look() {
    const { socks,vest,shirt,shoes,tie,jacket,belt } = useSelector((state: TStore) => state.jacketReducer);
   let total=( (parseInt(socks.price) |0) + (parseInt(vest.price)|0 )+ (parseInt(shirt.price)|0) + (parseInt(shoes.price)|0) + (parseInt(tie.price)|0) + (parseInt(jacket.price)|0) + (parseInt(belt.price)|0))
    return (
        <div className="col-lg-5 col-12 p-4">
            <div className="look-header">
                <div className="look-title">LOOK 1 -</div>
                <div className="look-total">${total}</div>
            </div>
            <JacketAndPants/>
            <Shirt/>
            <Vest/>
            <Shoes/>
            <Socks/>
            <Tie/>
            <Belt/>
            

            <div className="look-total">
                <div className="total-title">TOTAL</div>
                <div className="total-price">${total}</div>
            </div>

            <div className="bottom-btn">
                <div className="cancel-btn">CANCEL</div>      
                <div className="save-btn">SAVE LOOK</div>
            </div>

        </div>
    )
}
