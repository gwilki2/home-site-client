import React from 'react'
import mainLinks from '../../config/mainLinks'
import GwAnimatedTitle from './components/GwAnimatedTitle'
import HappyLogo from './components/HappyLogo'
import MainLinksDisplay from './components/MainLinksDisplay'
import styleClasses from './index.module.scss'

const NavBar = () => {
    return (
        <div className={styleClasses['nav-bar']}>
            <HappyLogo />
            <GwAnimatedTitle />
            <MainLinksDisplay links={mainLinks} />
        </div>
    )
}

export default NavBar