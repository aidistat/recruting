import { startRequest, successRequest, errorRequest } from './report-actions'


function reportThunk(params) {
   return function (dispatch) {
      dispatch(startRequest());
      console.log(params)
      fetch(`http://localhost:4000/report?startDate=${params.startDate}&endDate=${params.endDate}:`)
         .then(response => response.json())
         .then(data => dispatch(successRequest(data)))
         .catch(error => dispatch(errorRequest(error.message)))
   }
}
export default reportThunk;