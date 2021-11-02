import React from 'react'
import Preview from './LookBuilder/Preview/Preview'
import Galery from './LookBuilder/Galery/Galery'
import BigPreview from './LookBuilder/BigPreview/BigPreview'
import { useSelector } from 'react-redux'
import { TStore } from '../store'

const LookBuilder = () => {
    const {bigPreview} = useSelector((state:TStore) => state.jacketReducer)
    return (
        <div className="container-fluid">
            {bigPreview ? (<BigPreview/>):(
            <div className="row">
            <Preview />   
            <Galery/>
            </div>)
            }
            
            
        </div>
    )
}

export default LookBuilder
