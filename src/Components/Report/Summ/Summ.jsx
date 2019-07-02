import React, { Component } from 'react';
import LanguageList from '../LanguagesList/LanguagesList'

class Summ extends Component {
    render() {
        return (
            <div className="sum">
                <hr align="center" width="500" size="2" color="aquamarine" />
                <div>Суммарно {this.props.summ.count}</div>
                <div>{this.props.summ.positionList.map((position) => (
                    <LanguageList key={position.position}
                    languages={{ languages: position.position, value: position.count }}
                    />
                ))}</div>
            </div>
        )
    }
}

export default Summ;