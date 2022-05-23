/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import styleClasses from './MainLink.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainLink = ({ content, isExternal, to, standardProps, disableLink, disabledClassName='', activeClassName='', faIcon }) => {

    const onClick = (e) => {
        if (disableLink) {
            e.preventDefault()
        }
    }

    const linkContent = (
        <span className={disableLink ? disabledClassName : ''}>
            {faIcon && <span><FontAwesomeIcon icon={faIcon} /> </span>}{content}
        </span>
    )
    
    return isExternal
        ? <a
            {...standardProps}
            href={disableLink ? '#' : to}
            rel="noreferrer"
            target="_blank"
            className={`${styleClasses['main-link']} ${disableLink ? disabledClassName : ''}`}
        >
            {linkContent}
        </a>
        : <NavLink
            {...standardProps}
            className={(navData) => `${styleClasses['main-link']} ${navData.isActive ? activeClassName : ''} ${disableLink ? disabledClassName : ''}`}
            to={to}
            onClick={onClick}
        >
            {linkContent}
        </NavLink>
}

export default MainLink