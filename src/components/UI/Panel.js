import React from 'react'
import cssModules from './Panel.module.scss'

const Panel = ({children, className}) => {
    return (
        <div className={`${cssModules.panel} ${className}`}>
            {children}
        </div>
    )
}

export default Panel