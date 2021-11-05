import React from 'react'
import './vest.css'
import { useDispatch, useSelector } from "react-redux";
import { TStore } from '../../../../../store';
import { changeCategory ,changebigPreivew, changeLook} from '../../../../../slices/jacket';
const Vest = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'vest'}))
        dispatch(changebigPreivew({bigPreview:false}))
        dispatch(changeLook({look:false}))
    }
    const dispatch = useDispatch()
    const {vest} = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="col-lg-2 col-2 up">
            <div className="pointer-socks" onClick={handleClick}>
                <p className="text-center header-up-v">Vest & Cummerbund
                    <hr />
                </p>
                <div className="bprv_vest_wrapper " style={{ backgroundImage: `url(${vest.preview_full_url})` }}>
                </div>
            </div>
        </div>
    )
}

export default Vest
