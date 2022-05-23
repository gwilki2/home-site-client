import React from 'react'
import CenterPage from '../UI/CenterPage'
import InputReg from '../UI/InputReg'
import cssModules from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faIdCard } from '@fortawesome/pro-duotone-svg-icons'
import { faAt, faSignature } from '@fortawesome/pro-solid-svg-icons'

const ContactPage = () => {
    return (
        <CenterPage>
            <div className={cssModules['contact-page']}>
                <h1><FontAwesomeIcon icon={ faEnvelopeOpenText } /> Send me a message <FontAwesomeIcon icon={ faEnvelopeOpenText } /></h1>
                <div className={cssModules['contact-page__form']}>
                    
                    <div className={cssModules['contact-page__sender-info']}>
                        <div className={cssModules['contact-page__sender-info-left']}><FontAwesomeIcon icon={ faIdCard} size="9x" /></div>
                        <div className={cssModules['contact-page__sender-info-right']}>
                            <InputReg
                                inputProps={{
                                    id: 'name',
                                    name: 'name',
                                }}
                                labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={faSignature} /> Name:</span>}
                            />
                            <InputReg
                                inputProps={{
                                    id: 'email',
                                    name: 'email',
                                    type: 'email',
                                }}
                                labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faAt }/> Email:</span>}
                            />
                        </div>
                    </div>
                    <div className={cssModules['contact-page__message']}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea
                            id="message"
                            rows="5"
                        />
                    </div>
                </div>
            </div>
        </CenterPage>
    )
}

export default ContactPage 