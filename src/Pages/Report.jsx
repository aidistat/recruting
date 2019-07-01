import React, { Component } from "react";
import { connect } from "react-redux";
import SelectDates from "../Components/Report/SelectDates/SelectDates"
import Chart from "../Components/Report/Chart/Chart"
import Vacncy from "../Components/Report/Vacancy/Vacancy"
import CVSources from "../Components/Report/CVSources/CVSources"
import LanguagesList from "../Components/Report/LanguagesList/LanguagesList"
import Comments from "../Components/Report/Comments/Comments"
import DownloadXLSX from "../Components/Report/GenerateXLSX/Downloads"
import Diagramm from "../Components/Diagramm/Diagramm"
import Error from "../Components/Error/Error"
import { isLoading, selectData, isError, selectError } from "../redux/report/report-selectors";

class Report extends Component {

    render() {
        return (
            <div>
                <SelectDates />
                {this.props.isLoading ? 'Loading...' :
                this.props.isError ? <Error error={this.props.error}/>: <React.Fragment>
                    <Diagramm
                        dates={this.props.reportData.statusesList}
                    />
                    <Vacncy />
                    {/* <CVSources */}
                    {/* dates={this.state} */}
                    {/* /> */}
                    <LanguagesList />
                    <Comments />
                    <DownloadXLSX
                        dates={this.props.reportData}
                    />
                </React.Fragment>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        reportData: selectData(state),
        isError: isError(state),
        error: selectError(state)
    }
}


export default connect(mapStateToProps, null)(Report);
