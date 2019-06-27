import React, { Component } from "react";
import Button from "../../Button/Button"
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import generateArray from "../../../Services/generateAndDownloadXLSX"


class DownloadXLSX extends Component {
    download = () => {
        const dates = this.props
        generateArray(dates)
    }
    render() {
        return (
            <Button
                text="Download .xlsx"
                onClick={this.download}
            />
        )
    }
}
export default DownloadXLSX;