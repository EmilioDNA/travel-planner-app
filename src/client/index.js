import { isValidURL } from './js/urlChecker'
import { cleanResults } from './js/updateUI'
import { addResults } from './js/updateUI'
import { fetchSentiment } from './js/fetchData'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    isValidURL,
    cleanResults,
    addResults,
    fetchSentiment,
    handleSubmit
}