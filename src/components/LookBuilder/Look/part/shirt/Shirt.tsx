import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeLook } from '../../../../../slices/jacket';
import { TStore } from '../../../../../store';
import { ShirtIcon } from '../../../../icons/icons';

const Shirt = () => {
    const { shirt} = useSelector((state: TStore) => state.jacketReducer);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(changeLook({ look: false }))
        dispatch(changeCategory({category:'shirt'}))
    }
    return (
        <div>
            {shirt.name !== '' ? (
                <div className="selected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <img className="left-image position-absolute" src={shirt.preview_collar_url} alt="" style={{ width: '40px', height: '50px' }} />
                        <img className="left-image" src={shirt.preview_full_url} alt="" style={{ width: '40px', height: '50px' }} />
                        <img className="left-image position-absolute" src={shirt.preview_tail_url} alt="" style={{ width: '40px', height: '50px' }} />
                    </div>
                    <div className="right-container">
                        <div className="right-top">
                            <div className="suit-wrapper">
                                <div className="suit-name">{shirt.name}</div>
                                <div className="edit-btn">Edit</div>
                            </div>
                            <div className="delete-icon"><RiDeleteBin6Line /></div>
                        </div>
                        <div className="right-bottom">
                            <div className="rental-price">Rental Price:</div>
                            <div className="suit-price">{shirt.price}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="unselected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <ShirtIcon/>
                    </div>
                    <div className="unselected-right">
                        <div className="suit-kind">Shirt</div>
                        <div className="icon-plus"><AiOutlinePlus /></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shirt
