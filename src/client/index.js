import { isValidURL } from './js/urlChecker'
import { createTravelCard} from './js/updateUI'
import { getGeoNamesCity, getWeatherCondition, getImage } from './js/fetchData'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'

export {
    isValidURL,
    createTravelCard,
    getGeoNamesCity,
    getWeatherCondition,
    getImage,
    handleSubmit
}