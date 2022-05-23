import React from 'react'
import cssModules from './InputReg.module.scss'

const InputReg = ({ propClasses, inputProps, labelContent }) => {
    console.log('inputReg', labelContent)
    return (
        <div className={`${cssModules['input-reg']} ${propClasses}`}>
            <label htmlFor={inputProps.id}>{ labelContent }</label>
            <input {...inputProps} />
        </div>
    )
}

export default InputReg