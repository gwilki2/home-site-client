import React from 'react'
import HappyFace from '../../Svgs/HappyFace'
import styleClasses from './HappyLogo.module.scss'

const HappyLogo = () => {
    return (
        
        <div>
            <HappyFace className={styleClasses['happy-logo']} />
        </div>
            
    )
}

export default HappyLogo