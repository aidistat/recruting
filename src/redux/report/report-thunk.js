import { startRequest, successRequest, errorRequest } from './report-actions'
import * as Constants from '../../Constants/constants'


function reportThunk(params) {
   return function (dispatch) {
      dispatch(startRequest());
      fetch(`${Constants.URL_REPORT}startDate=${params.startDate}&endDate=${params.endDate}`)
         .then(response =>  response.json())
         .then(data => {console.log(data); dispatch(successRequest(data))})
         .catch(error => dispatch(errorRequest(error.message)))
   }
}
export default reportThunk;