import React from 'react'
import Preview from './LookBuilder/Preview/Preview'
import Galery from './LookBuilder/Galery/Galery'

const LookBuilder = () => {
    return (
        <div className="container-fluid">
            <div className="row">
            <Preview />   
            <Galery/>
            </div>
        </div>
    )
}

export default LookBuilder
