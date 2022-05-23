import React from 'react'
import GwInitials from '../Svgs/GwInitials'
import cssModules from './index.module.scss'

const Footer = () => {
    return (
        <div className={cssModules.footer}>
            made by&nbsp;
            <GwInitials className={cssModules['initials-svg']} />
        </div>
    )
}

export default Footer