import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeLook } from '../../../../../slices/jacket';
import { TStore } from '../../../../../store';
import { Jacket } from '../../../../icons/icons';

const JacketAndPants = () => {
    const { jacket} = useSelector((state: TStore) => state.jacketReducer);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(changeLook({ look: false }))
        dispatch(changeCategory({category:'jacket'}))
    }
    return (
        <div>
            {jacket.name !== '' ? (
                <div className="selected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <img className="left-image" src={jacket.preview_full_url} alt="" style={{ width: '40px', height: '50px' }} />
                    </div>
                    <div className="right-container">
                        <div className="right-top">
                            <div className="suit-wrapper">
                                <div className="suit-name">{jacket.name}</div>
                                <div className="edit-btn">Edit</div>
                            </div>
                            <div className="delete-icon"><RiDeleteBin6Line /></div>
                        </div>
                        <div className="right-bottom">
                            <div className="rental-price">Rental Price:</div>
                            <div className="suit-price">{jacket.price}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="unselected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <Jacket/>
                    </div>
                    <div className="unselected-right">
                        <div className="suit-kind">Jacket</div>
                        <div className="icon-plus"><AiOutlinePlus /></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default JacketAndPants


