import React, { Component } from "react";
import { connect } from "react-redux";
import SelectDates from "../Components/Report/SelectDates/SelectDates"
import Vacncy from "../Components/Report/Vacancy/Vacancy"
import CVSources from "../Components/Report/CVSources/CVSources"
import LanguagesList from "../Components/Report/LanguagesList/LanguagesList"
import Comments from "../Components/Report/Comments/Comments"
import DownloadXLSX from "../Components/Report/GenerateXLSX/Downloads"
import Diagramm from "../Components/Diagramm/Diagramm"
import Summ from "../Components/Report/Summ/Summ"
import Error from "../Components/Error/Error"
import { isLoading, selectData, isError, selectError, isReporting } from "../redux/report/report-selectors";

class Report extends Component {

    render() {
        return (
            <div>
                { this.props.isReporting ?
                    <React.Fragment>
                        <SelectDates />
                        {this.props.isLoading ? 'Loading...' :
                            this.props.isError ? <Error error={this.props.error} /> :
                                <React.Fragment>
                                    <Diagramm
                                        dates={this.props.reportData.statusesList}
                                    />
                                    <Vacncy />
                                    <CVSources
                                data={this.props.reportData.sourcesList}
                            />
                                    <LanguagesList />
                                    <Comments />
                                    <DownloadXLSX
                                        dates={this.props.reportData}
                                    />
                                    <Summ
                                    summ={this.props.reportData.sum}
                                    />
                                </React.Fragment>}
                    </React.Fragment> : <SelectDates /> }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isReporting: isReporting(state),
        isLoading: isLoading(state),
        reportData: selectData(state),
        isError: isError(state),
        error: selectError(state)
    }
}


export default connect(mapStateToProps, null)(Report);
