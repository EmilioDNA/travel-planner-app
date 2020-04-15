import { getTravelDaysLeft, formatToDate, replaceSpaces } from './js/utils'
import { createTravelCard, cleanResults} from './js/updateUI'
import { getGeoNamesCity, getWeatherCondition, getImage, saveTrip } from './js/fetchData'
import { handleSubmit, handleClick } from './js/formHandler'

import './styles/resets.scss'
import './styles/header.scss'
import './styles/base.scss'
import './styles/footer.scss'


export {
    formatToDate,
    getTravelDaysLeft,
    replaceSpaces,
    createTravelCard,
    cleanResults,
    getGeoNamesCity,
    getWeatherCondition,
    getImage,
    saveTrip,
    handleSubmit,
    handleClick,
}