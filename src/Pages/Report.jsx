import React, { Component } from "react";
import { connect } from "react-redux";
import SelectDates from "../Components/Report/SelectDates/SelectDates"
import Vacncy from "../Components/Report/Vacancy/Vacancy"
import LanguagesList from "../Components/Report/LanguagesList/LanguagesList"
import Comments from "../Components/Report/Comments/Comments"
import DownloadXLSX from "../Components/Report/GenerateXLSX/Downloads"
import GeneralReport from "../Components/Report/GeneralReport/GeneralReport"
import Error from "../Components/Error/Error"
import { isLoading, selectData, isError, selectError, isReporting } from "../redux/report/report-selectors";

class Report extends Component {
    setComments = (commentID, commentTaxt) => {

    }
    render() {
        return (
            <div>
                <SelectDates />
                {this.props.isError ? <Error error={this.props.error} /> :
                    this.props.isReporting ?
                        <React.Fragment>
                            {this.props.isLoading ? 'Loading...' :
                                <React.Fragment>
                                    <Vacncy />
                                    <GeneralReport
                                        reportData={this.props.reportData}
                                    />
                                    <DownloadXLSX
                                        data={this.props.reportData}
                                    />
                                </React.Fragment>}
                        </React.Fragment> : <div></div>}
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
