import React from 'react'
import CenterPage from '../UI/CenterPage'
import InputReg from '../UI/InputReg'
import cssModules from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faIdCard } from '@fortawesome/pro-duotone-svg-icons'
import { faAt, faSignature, faCommentPen, faInboxOut, faHashtag, faHandPointRight } from '@fortawesome/pro-solid-svg-icons'
import Panel from '../UI/Panel'

const ContactPage = () => {

    const underConstruction = e => {
        e.preventDefault()
        alert('Sorry, my contact page is still under construction.  ')
    }
    return (
        <CenterPage>
            <div className={cssModules['contact-page']}>
                <h1><FontAwesomeIcon icon={faEnvelopeOpenText}/> Send me a message <FontAwesomeIcon icon={ faEnvelopeOpenText } /></h1>
                <Panel className={cssModules['contact-panel']}>
                    <form className={cssModules['contact-page__form']} onSubmit={underConstruction}>
                    
                        <div className={cssModules['contact-page__sender-info']}>
                            <div className={cssModules['contact-page__sender-info-left']}><h3>Contact Info <FontAwesomeIcon icon={ faHandPointRight } /></h3><FontAwesomeIcon icon={ faIdCard} size="9x" /></div>
                            <div className={cssModules['contact-page__sender-info-right']}>
                                <InputReg
                                    inputProps={{
                                        id: 'name',
                                        name: 'name',
                                        placeholder: 'Page under construction',
                                        readOnly: true
                                    }}
                                    labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={faSignature} /> Name:</span>}
                                />
                                <InputReg
                                    inputProps={{
                                        id: 'email',
                                        name: 'email',
                                        type: 'email',
                                        placeholder: 'Page under construction',
                                        readOnly: true
                                    }}
                                    labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faAt }/> Email:</span>}
                                />
                                <InputReg
                                    inputProps={{
                                        id: 'phone',
                                        name: 'phone',
                                        placeholder: 'Page under construction',
                                        readOnly: true
                                    }}
                                    labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faHashtag }/> Phone (optional):</span>}
                                />
                            </div>
                        </div>
                        <div className={cssModules['contact-page__message']}>
                            <label htmlFor="message"><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faCommentPen }/> Your Message:</label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Page under construction"
                                readOnly
                            />
                        </div>
                        <button><FontAwesomeIcon icon={ faInboxOut }/> Send</button>
                    </form>
                </Panel>
            </div>
        </CenterPage>
    )
}

export default ContactPage 