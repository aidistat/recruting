import React, { Component } from 'react';
import './cvsources.css'
import gmailLogo from './logo/gmail.png';
import hhLogo from './logo/hh.png';
import LanguagesList from '../LanguagesList/LanguagesList'
import jobkgLogo from './logo/jobkg.png';


const logos = {
    gmail: gmailLogo,
    hh: hhLogo,
    jobkg: jobkgLogo
};

class CVSources extends Component {
    // static propTypes = {
    //     sources: PropTypes.object.isRequired,
    // }
    getTotalSumm = (obj) => {
        const keysArray = Object.keys(obj);
        let totalArray = keysArray.map((key) => {
            if (obj[key]) {
                return obj[key];
            }
        })
        const resultSumm = totalArray.reduce((a, b) => a + b)

        return resultSumm;
    }
    render() {

        return (
            <div className="sourses">
                {}
                {Object.keys(this.props.dates.sources).map((key) => (
                    <div key={key}>
                        {logos[key] ? <img src={logos[key]} /> : key}
                        <span>Откликнулось {this.getTotalSumm(this.props.dates.sources[key])} человек</span>
                        {Object.keys(this.props.dates.sources[key]).map((languages) => (
                            <LanguagesList key={languages}
                                languages={{ languages: languages, value: this.props.dates.sources[key][languages] }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}
export default CVSources;