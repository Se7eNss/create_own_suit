import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { changeLook, changeCategory } from '../../../../../slices/jacket';
import { TStore } from '../../../../../store';
import { Shoe } from '../../../../icons/icons';

const Shoes = () => {
    const { shoes } = useSelector((state: TStore) => state.jacketReducer);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(changeLook({ look: false }))
        dispatch(changeCategory({category:'shoes'}))
    }
    return (
        <div>
            {shoes.name !== '' ? (
                <div className="selected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <img className="left-image" src={shoes.galery_url} alt="" style={{ width: '40px', height: '50px' }} />
                    </div>
                    <div className="right-container">
                        <div className="right-top">
                            <div className="suit-wrapper">
                                <div className="suit-name">{shoes.name}</div>
                                <div className="edit-btn">Edit</div>
                            </div>
                            <div className="delete-icon"><RiDeleteBin6Line /></div>
                        </div>
                        <div className="right-bottom">
                            <div className="rental-price">Rental Price:</div>
                            <div className="suit-price">{shoes.price}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="unselected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <Shoe/>
                    </div>
                    <div className="unselected-right">
                        <div className="suit-kind">Shoes</div>
                        <div className="icon-plus"><AiOutlinePlus /></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shoes
