import React from 'react'
import { useSelector } from 'react-redux'
import { TStore } from '../../../../../store'
import './shoe.css'
const Shoe = () => {
    const { shoes } = useSelector((state: TStore) => state.jacketReducer)
    return (
        <div className="shoes-wrapper ">
            <img src={shoes.preview_full_url} alt="" />
        </div>
    )
}

export default Shoe
