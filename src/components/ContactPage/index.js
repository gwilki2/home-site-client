import React, { useState } from 'react'
import CenterPage from '../UI/CenterPage'
import InputReg from '../UI/InputReg'
import cssModules from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faIdCard } from '@fortawesome/pro-duotone-svg-icons'
import { faAt, faSignature, faCommentPen, faInboxOut, faHashtag, faHandPointRight } from '@fortawesome/pro-solid-svg-icons'
import Panel from '../UI/Panel'
import homeSiteApi from '../../apis/homeSite'

const ContactPage = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phoneText, setPhoneText] = useState('')
    const [phone, setPhone] = useState(null)
    const [name, setName] = useState('')
    
    const setValues = {
        email: setEmail, 
        message: setMessage, 
        phone: setPhone, 
        name: setName
    }

    // const underConstruction = e => {
    //     e.preventDefault()
    //     alert('Sorry, my contact page is still under construction.  ')
    // }


    const resetFields = () => {
        setEmail('')
        setPhone(null)
        setName('')
        setMessage('')
        setPhoneText('')
    }

    const parsePhone = (value) => {
        let valArr = value.split('')
        //console.log(valArr)
        //console.log([1234567890].includes(valArr[0]) )
        const numsOnly = valArr.reduce((accum, val) => '1234567890'.includes(val) ? accum + val : accum, '')
        //console.log(numsOnly)
        return numsOnly.slice(0,10)
    }

    const formatPhoneNum = value => {
        const phoneArray = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ]
        
        const valueArr = value.split('')
        const vLength = valueArr.length
        
        if (vLength >= 1) {
            phoneArray[0] = '('
            if (valueArr[0]) phoneArray[1] = valueArr[0]
            if (valueArr[1]) phoneArray[2] = valueArr[1]
            if (valueArr[2]) phoneArray[3] = valueArr[2]
        }
        
        if (vLength >= 4) {
            phoneArray[4] = ')'
            phoneArray[5] = ' '
            if (valueArr[3]) phoneArray[6] = valueArr[3]
            if (valueArr[4]) phoneArray[7] = valueArr[4]
            if (valueArr[5]) phoneArray[8] = valueArr[5]
        }
        if (vLength >= 7) {
            phoneArray[9] = ' '
            phoneArray[10] = '-'
            phoneArray[11] = ' '
            if (valueArr[6]) phoneArray[12] = valueArr[6]
            if (valueArr[7]) phoneArray[13] = valueArr[7]
            if (valueArr[8]) phoneArray[14] = valueArr[8]
            if (valueArr[9]) phoneArray[15] = valueArr[9]
        }


        //console.log(phoneArray)
        return phoneArray.join('')


    }

    const inputChanged = e => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        switch (fieldName) {
            case 'phone':
                const phoneNumsOnly = parsePhone(fieldValue)
                setPhoneText(formatPhoneNum(phoneNumsOnly))
                setPhone(parseInt(phoneNumsOnly))
                break;
            default: 
                setValues[fieldName](fieldValue)
                
        }
    }

    const sendMessage = async e => {
        e.preventDefault()

        try {
            await homeSiteApi.post('/messages', {
                name, 
                email, 
                phone, 
                message
            })

            resetFields()

            alert('message sent')
        } catch (e) {
            
        }


    }

    return (
        <CenterPage>
            <div className={cssModules['contact-page']}>
                <h1><FontAwesomeIcon icon={faEnvelopeOpenText}/> Send me a message <FontAwesomeIcon icon={ faEnvelopeOpenText } /></h1>
                <Panel className={cssModules['contact-panel']}>
                    <form className={cssModules['contact-page__form']} onSubmit={sendMessage}>
                    
                        <div className={cssModules['contact-page__sender-info']}>
                            <div className={cssModules['contact-page__sender-info-left']}><h3>Contact Info <FontAwesomeIcon icon={ faHandPointRight } /></h3><FontAwesomeIcon icon={ faIdCard} size="9x" /></div>
                            <div className={cssModules['contact-page__sender-info-right']}>
                                <InputReg
                                    inputProps={{
                                        id: 'name',
                                        name: 'name',
                                        //placeholder: 'Page under construction',
                                        //readOnly: true, 
                                        value: name, 
                                        onChange: inputChanged
                                    }}
                                    labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={faSignature} /> Name:</span>}
                                />
                                <InputReg
                                    inputProps={{
                                        id: 'email',
                                        name: 'email',
                                        type: 'email',
                                        //placeholder: 'Page under construction',
                                        //readOnly: true,
                                        value: email, 
                                        onChange: inputChanged
                                    }}
                                    labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faAt }/> Email:</span>}
                                />
                                <InputReg
                                    inputProps={{
                                        id: 'phone',
                                        name: 'phone',
                                        placeholder:"Auto formatted: Type numbers only.",
                                        //placeholder: 'Page under construction',
                                        //readOnly: true, 
                                        value: phoneText, 
                                        onChange: inputChanged
                                    }}
                                    labelContent={<span><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faHashtag }/> Phone (optional): <span style={{fontSize:'.6em', color: 'gray'}}>US (312) 555 - 1212</span></span>}
                                />
                            </div>
                        </div>
                        <div className={cssModules['contact-page__message']}>
                            <label htmlFor="message"><FontAwesomeIcon className={cssModules['form-input-icon']} icon={ faCommentPen }/> Your Message:</label>
                            <textarea
                                id="message"
                                rows="6"
                                name="message"
                                //readOnly
                                value={message}
                                onChange={inputChanged}
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