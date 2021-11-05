import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { changeLook, changeCategory } from '../../../../../slices/jacket';
import { TStore } from '../../../../../store';
import { Sock } from '../../../../icons/icons';

const Socks = () => {
    const { socks } = useSelector((state: TStore) => state.jacketReducer);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(changeLook({ look: false }))
        dispatch(changeCategory({category:'socks'}))
    }
    return (
        <div>
            {socks.name !== '' ? (
                <div className="selected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <img className="left-image" src={socks.galery_url} alt="" style={{ width: '40px', height: '50px' }} />
                    </div>
                    <div className="right-container">
                        <div className="right-top">
                            <div className="suit-wrapper">
                                <div className="suit-name">{socks.name}</div>
                                <div className="edit-btn">Edit</div>
                            </div>
                            <div className="delete-icon"><RiDeleteBin6Line /></div>
                        </div>
                        <div className="right-bottom">
                            <div className="rental-price">Rental Price:</div>
                            <div className="suit-price">{socks.price}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="unselected-suits" onClick={handleClick}>
                    <div className="image-container">
                        <Sock/>
                    </div>
                    <div className="unselected-right">
                        <div className="suit-kind">Socks</div>
                        <div className="icon-plus"><AiOutlinePlus /></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Socks
