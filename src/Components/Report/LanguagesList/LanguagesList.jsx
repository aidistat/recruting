import React, { Component } from "react";


class LanguagesList extends Component {
    render() {
        return (
            <div className="languages">
                {this.props.languages ? <div><span>{this.props.languages.languages}  </span><span>{this.props.languages.value}</span></div> : <span></span> }
            </div>
        )
    }
}

export default LanguagesList;