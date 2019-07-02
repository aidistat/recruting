import React, { Component } from 'react';
import './cvsources.css'
import gmailLogo from './logo/gmail.png';
import hhLogo from './logo/hh.png';
import LanguagesList from '../LanguagesList/LanguagesList'
import jobkgLogo from './logo/jobkg.png';


const logos = {
    GMAIL: gmailLogo,
    HH: hhLogo,
    JOBKG: jobkgLogo
};

class CVSources extends Component {
    // static propTypes = {
    //     sources: PropTypes.object.isRequired,
    // }

    render() {
        return (
            <div className="sourses">
                {this.props.data.map((obj) => (
                    <div key={obj.source}>
                        <div className="sourse-title">
                            <img className="sourse-logo" src={logos[obj.source]} alt={obj.source} />
                            <span>Откликнулось {obj.count} человек</span>
                        </div>
                        {obj.positionList.map(({position, count}) => (
                            <LanguagesList
                                key={position}
                                position={position}
                                count={count}
                            />
                        ))}
                    </div>
                ))}
                <div className="sum">
                    <hr align="center" width="100%" size="2" color="aquamarine" />
                    <div>Суммарно {this.props.summary.count}</div>
                    <div>{this.props.summary.positionList.map((position) => (
                        <LanguagesList key={position.position}
                            languages={{ languages: position.position, value: position.count }}
                        />
                    ))}</div>
                </div>
            </div>
        )
    }
}
export default CVSources;