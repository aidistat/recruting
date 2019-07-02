import React from 'react';
import './generalReport.css';
import Diagramm from '../../Diagramm/Diagramm';
import CVSources from '../CVSources/CVSources';

const GeneralReport = ({ reportData }) => {
    return (
        <div className="generalReport">
            <CVSources
                data={reportData.sourcesList}
                summary={reportData.sum}
            />
            <Diagramm
                data={reportData.statusesList}
            />

        </div>
    )
}

export default GeneralReport;