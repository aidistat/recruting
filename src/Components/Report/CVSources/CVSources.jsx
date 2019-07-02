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
                        {logos[obj.source] ? <img src={logos[obj.source]} alt={obj.source} /> : obj.source}
                        <span>Откликнулось {obj.count} человек</span>
                        {obj.positionList.map((languages) => (
                            <LanguagesList key={languages.position}
                                languages={{ languages: languages.position, value: languages.count }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}
export default CVSources;