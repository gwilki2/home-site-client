import axios from 'axios'
import appConfig from '../config/appConfig'

const homeSite = axios.create({
    baseURL: appConfig.homeSiteApiUrl
})

export default homeSite