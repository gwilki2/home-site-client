import React from 'react'
import MainLink from '../../UI/MainLink'
import cssModules from './MainLinksDisplay.module.scss'

const MainLinksDisplay = ({links}) => {
    return (
        <div className={cssModules['main-links-display']}>
            {links.map(link => <MainLink
                key={link.name}
                to={link.to}
                content={link.content}
                isExternal={link.isExternal}
                disableLink={link.disabled}
                activeClassName={cssModules.active}
                disabledClassName={cssModules.disabled}
                faIcon={link.faIcon}
                className={cssModules[link.name + '-home-link']}
            />)}
        </div>
    )
}

export default MainLinksDisplay