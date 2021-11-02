import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeCategory,changebigPreivew } from '../../../../../slices/jacket'
import { TStore } from '../../../../../store'
import './shirt.css'
const Shirt = () => {
    const handleClick=()=>{
        dispatch(changeCategory({category:'shirt'}))
        dispatch(changebigPreivew({bigPreview:false}))
    }
    const dispatch = useDispatch()
    const { shirt } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div  className="col-lg-3 up">
            <div className="pointer" onClick={handleClick}>
            <p className="text-center header-up">Shirt
            <hr />
            </p>
            <div className="bprv_shirt_wrapper " style={{backgroundImage: `url(${shirt.preview_collar_url}),url(${shirt.preview_full_url}) ,url(${shirt.preview_tail_url})  ` }}>
            </div>
            </div>
        </div>
    )
}

export default Shirt
