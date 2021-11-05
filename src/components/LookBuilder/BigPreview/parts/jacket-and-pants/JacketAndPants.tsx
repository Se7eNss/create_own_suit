import React from 'react'
import './jacketAndPant.css'
import {  useSelector ,useDispatch} from "react-redux";
import { TStore } from '../../../../../store';
import { changeCategory ,changebigPreivew, changeLook} from '../../../../../slices/jacket';
const JacketAndPants = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'jacket'}))
        dispatch(changebigPreivew({bigPreview:false}))
        dispatch(changeLook({look:false}))
    }
    const dispatch=useDispatch();
    const { jacket } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="col-lg-3 col-3 up" >
            <div className="pointer" onClick={handleClick}>
                <p className="text-center header-up-J">Jacket & Pants
                    <hr />
                </p>
                <div className="bprv_jacket_wrapper " style={{ backgroundImage: `url(${jacket.preview_full_url}),url(${jacket.pants_url}),url(./asset/default-img/hanger.png)` }}>
                </div>
            </div>
        </div>
    )
}

export default JacketAndPants
