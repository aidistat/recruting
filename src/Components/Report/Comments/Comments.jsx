import React, {Component} from 'react';
import './comments.css'

class Comments extends Component{
    render(){
        return(

        <div>
                <div className="e-float-input">
                <label className="e-float-text"> Коментарий:</label>

                    <p><textarea required={false}/></p> 
                </div>
            </div>
        )
    }
}
export default Comments