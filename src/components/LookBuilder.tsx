import React from 'react'
import Preview from './LookBuilder/Preview/Preview'
import Galery from './LookBuilder/Galery/Galery'
import BigPreview from './LookBuilder/BigPreview/BigPreview'
import Look from './LookBuilder/Look/Look'
import { useSelector } from 'react-redux'
import { TStore } from '../store'

const LookBuilder = () => {
    const {bigPreview,look} = useSelector((state:TStore) => state.jacketReducer)
    return (
        <div className="container-fluid">
            {bigPreview ? (<BigPreview/>):(
            <div className="row">
            <Preview />   
            {look ? (<Look/>):(<Galery/>)}
            </div>)
            }
            
            
        </div>
    )
}

export default LookBuilder
