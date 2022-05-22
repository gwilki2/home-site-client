import React from 'react'
import MainLink from '../../UI/MainLink'
import styleClasses from './MainLinksDisplay.module.scss'

const MainLinksDisplay = ({links}) => {
    return (
        <div className={styleClasses['main-links-display']}>
            {links.map(link => <MainLink
                key={link.name}
                to={link.to}
                content={link.content}
                isExternal={link.isExternal}
                disableLink={link.disabled}
            />)}
        </div>
    )
}

export default MainLinksDisplay