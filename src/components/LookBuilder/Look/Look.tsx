import React from 'react';
import './look.css';
import {RiDeleteBin6Line,AiOutlinePlus} from 'react-icons/all';
import {Tie} from '../../icons/icons';
import { useSelector } from 'react-redux';
import { TStore } from '../../../store';

export default function Look() {
    const initialstate = useSelector((state: TStore) => state.jacketReducer);
    
    return (
        <div className="col-lg-5 col-12 p-4">
            <div className="look-header">
                <div className="look-title">LOOK 1 -</div>
                <div className="look-total">$199</div>
            </div>
            <div className="selected-suits">
                <div className="image-container">
                    <img className="left-image" src="/asset/preview/jackets/130069BLK-jacket_full.png" alt="" style={{width:'40px',height:'50px'}}/>
                </div>
                <div className="right-container">
                <div className="right-top">
                    <div className="suit-wrapper">
                    <div className="suit-name">black jacket</div>
                    <div className="edit-btn">Edit</div>
                </div> 
                    <div className="delete-icon"><RiDeleteBin6Line/></div>
                </div> 
                <div className="right-bottom">
                <div className="rental-price">Rental Price:</div>
                <div className="suit-price">$20</div>
                </div>
                </div>
            </div>
            <div className="unselected-suits">
                <div className="image-container">
                    <Tie/>
                </div>
                <div className="unselected-right">
                <div className="suit-kind">Tie</div>
                <div className="icon-plus"><AiOutlinePlus/></div>
                </div>
            </div>

            <div className="look-total">
                <div className="total-title">TOTAL</div>
                <div className="total-price">$199</div>
            </div>

            <div className="bottom-btn">
                <div className="cancel-btn">CANCEL</div>      
                <div className="save-btn">SAVE LOOK</div>
            </div>

        </div>
    )
}
