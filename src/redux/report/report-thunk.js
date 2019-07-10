import { startRequest, successRequest, errorRequest } from './report-actions'
import * as Constants from '../../Constants/constants'


function reportThunk(params) {
   return function (dispatch) {
      dispatch(startRequest());
      console.log(params)
      fetch(`${Constants.REPORT_URL}startDate=${params.startDate}&endDate=${params.endDate}:`)
         .then(response => response.json())
         .then(data => dispatch(successRequest(data)))
         .catch(error => dispatch(errorRequest(error.message)))
   }
}
export default reportThunk;