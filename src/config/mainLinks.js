import { faHouseChimneyWindow, faMessagePen } from '@fortawesome/pro-duotone-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const mainLinks = [
    {name: 'home', to: '/', content: 'Home', helpText: '', isExternal: false, disabled: false, faIcon: faHouseChimneyWindow}, 
    {name: 'contact', to: '/contact', content: <span>Contact<span style={{marginLeft:'.2em'}}>Me</span></span>, helpText: '', isExternal: false, disabled: false, faIcon: faMessagePen}, 
    {name: 'linkedin', to: 'https://www.linkedin.com/in/gwilki2/', content: <span>My<span style={{marginLeft:'.2em'}}>Linkedin</span></span>, helpText: '', isExternal: true, disabled: false, faIcon: faLinkedin}, 
]

export default mainLinks