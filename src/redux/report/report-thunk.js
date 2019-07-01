import { startRequest, successRequest, errorRequest } from './report-actions'


function reportThunk(params) {
   return function (dispatch) {
      dispatch(startRequest());

      fetch('http://localhost:4000/report?startDate=54455&endDate=3543453:')
         .then(response => response.json())
         .then(data => dispatch(successRequest(data)))
         .catch(error => dispatch(errorRequest(error.message)))
   }
}
export default reportThunk;