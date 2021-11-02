import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { changeCategory,changebigPreivew } from '../../../../../slices/jacket'
import { TStore } from '../../../../../store'
import './shoes.css'
const Shoes = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'shoes'}))
        dispatch(changebigPreivew({bigPreview:false}))
    }
    const dispatch = useDispatch()
    const { shoes } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="col-lg-2 ">
            <div className="pointer" onClick={handleClick}>
                <p className="text-center header-shoes ">Shoes
                    <hr />
                </p>
                <div className="bprv_shoes_wrapper " style={{ backgroundImage: `url(${shoes.preview_full_url})` }}>
                </div>
            </div>
        </div>
    )
}

export default Shoes
