import React from 'react'
import cssModule from './CenterPage.module.scss'


const CenterPage = ({children}) => {
    return (
        <div className={cssModule['center-page']}>{children}</div>
    )
}

export default CenterPage