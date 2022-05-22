/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import styleClasses from './MainLink.module.scss'

const MainLink = ({ content, isExternal, to, standardProps, disableLink }) => isExternal
    ? <a
        {...standardProps}
        href={disableLink ? '#' : to}
        rel="noreferrer"
        target="_blank"
        className={styleClasses['main-link']}
    >
        <span  style={disableLink ? { cursor: 'not-allowed', color: '#aaa' } : {}}>
            {content}
        </span>
    </a>
    : <NavLink
        {...standardProps}
        className={(isActive) => `${styleClasses['main-link']} ${isActive ? styleClasses['active'] : ''}`}
        to={disableLink ? '#' : to}        
    >
        <span  style={disableLink ? { cursor: 'not-allowed', color: '#aaa' } : {}}>
            {content}
        </span>
    </NavLink>


export default MainLink