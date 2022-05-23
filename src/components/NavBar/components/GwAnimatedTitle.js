import React from 'react'
import cssModules from './GwAnimatedTitle.module.scss'

const GwAnimatedTitle = () => {

    console.log(cssModules)
    return (
        <div id="my-name-title" className={cssModules['gw-animated-title']} >
            <div className={cssModules['full-title-container']}>
                <div id={cssModules['testm']} className={cssModules['my-first-name']}>
                    <span id="geo1" className="first-name-letter name-letter">G</span>
                    <span id="geo2" className="first-name-letter name-letter">e</span>
                    <span id="geo3" className="first-name-letter name-letter">o</span>
                    <span id="geo4" className="first-name-letter name-letter">r</span>
                    <span id="geo5" className="first-name-letter name-letter">g</span>
                    <span id="geo6" className="first-name-letter name-letter">e</span>
                </div>
                <div className={cssModules.line2}>
                    <span id={cssModules['my-last-name']}>
                        <span id="wilk1" className="last-name-letter name-letter">W</span>
                        <span id="wilk2" className="last-name-letter name-letter">i</span>
                        <span id="wilk3" className="last-name-letter name-letter">l</span>
                        <span id="wilk4" className="last-name-letter name-letter">k</span>
                        <span id="wilk5" className="last-name-letter name-letter">i</span>
                        <span id="wilk6" className="last-name-letter name-letter">n</span>
                        <span id="wilk7" className="last-name-letter name-letter">s</span>
                    </span>
                    <span id={cssModules['dot-com']}>
                        <span id="dcom1" className="dot-com-letter name-letter">.</span>
                        <span id="dcom2" className="dot-com-letter name-letter">c</span>
                        <span id="dcom3" className="dot-com-letter name-letter">o</span>
                        <span id="dcom4" className="dot-com-letter name-letter">m</span>
                    </span>
                </div>
            </div>
        </div>
        )
}

export default GwAnimatedTitle
