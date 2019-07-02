import React, { Component } from "react";
import './languagesList.css';

class LanguagesList extends Component {
    render() {
        return (
            <div className="language">
                <span className="language-position">{this.props.position}  </span>
                <span className="language-count">{this.props.count}</span>
            </div>
        )
    }
}

export default LanguagesList;