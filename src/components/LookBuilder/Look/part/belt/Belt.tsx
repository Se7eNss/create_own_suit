import React from 'react'
import { AiOutlinePlus, RiDeleteBin6Line } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeLook } from '../../../../../slices/jacket';
import { TStore } from '../../../../../store';
import { BeltIcon} from '../../../../icons/icons'

const Belt = () => {
    const { belt } = useSelector((state: TStore) => state.jacketReducer);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(changeLook({ look: false }))
        dispatch(changeCategory({category:'belt'}))
    }
    return (
        <div>
            {belt.name !== '' ? (
                <div className="selected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <img className="left-image" src={belt.galery_url} alt="" style={{ width: '40px', height: '50px' }} />
                    </div>
                    <div className="right-container">
                        <div className="right-top">
                            <div className="suit-wrapper">
                                <div className="suit-name">{belt.name}</div>
                                <div className="edit-btn">Edit</div>
                            </div>
                            <div className="delete-icon"><RiDeleteBin6Line /></div>
                        </div>
                        <div className="right-bottom">
                            <div className="rental-price">Rental Price:</div>
                            <div className="suit-price">{belt.price}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="unselected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <BeltIcon/>
                    </div>
                    <div className="unselected-right">
                        <div className="suit-kind">Belt</div>
                        <div className="icon-plus"><AiOutlinePlus /></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Belt
