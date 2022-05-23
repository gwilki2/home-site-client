import { faHouseChimneyWindow, faMessagePen } from '@fortawesome/pro-duotone-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const mainLinks = [
    {name: 'home', to: '/', content: 'Home', helpText: '', isExternal: false, disabled: false, faIcon: faHouseChimneyWindow}, 
    {name: 'contact', to: '/contact', content: 'Contact Me', helpText: '', isExternal: false, disabled: false, faIcon: faMessagePen}, 
    {name: 'linkedin', to: 'https://www.linkedin.com/in/gwilki2/', content: 'My Linkedin', helpText: '', isExternal: true, disabled: false, faIcon: faLinkedin}, 
]

export default mainLinks