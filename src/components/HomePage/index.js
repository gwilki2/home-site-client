import React from 'react'
import faceImage from '../../assets/images/me-cartoonized.png'
import CenterPage from '../UI/CenterPage'
import cssModules from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceStationMoonConstruction, faCircleChevronRight } from '@fortawesome/pro-duotone-svg-icons'

const HomePage = () => {
    return (
        <CenterPage>
            <div className={cssModules['home-page']}>
                <div className={cssModules['home-page__title']}>
                    <h2><FontAwesomeIcon icon={faSpaceStationMoonConstruction} /> Site Under Reconstruction</h2>
                </div>
                <div className={cssModules['home-page__message']}>
                    <img src={faceImage} alt="cartoonized face" align="left" />
                    <p>Thank you for visiting my home site.  I've decided to rebuild it, so it's currently under reconstruction.</p>
                    <p>If you'd like to see some of my work, I've provided a small demo app, below, that I call CloudyChat.  There are also links to the client and server code in my GitHub repository.  Please reach out to me through my <a href='https://www.linkedin.com/in/gwilki2/' rel="noreferrer" target="_blank">Linkedin page</a> if you'd like to connect about a project or opening that I might be able to .</p>
                    <ul>
                        <li><a href='https://cloudychat.georgewilkins.com' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faCircleChevronRight} /> CloudyChat.GeorgeWilkins.com</a></li>
                        <li><a href='https://github.com/gwilki2/chat-client-final' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faCircleChevronRight} /> GitHub Repo: CouldyChat Frontend (ReactJS)</a></li>
                        <li><a href='https://github.com/gwilki2/chat-server-final' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faCircleChevronRight} /> GitHub Repo: CouldyChat Server API (Node/Express)</a></li>
                    </ul>
                </div>
            </div>
        </CenterPage>
    )
}

export default HomePage