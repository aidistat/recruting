import React, { Component } from "react";
import Button from "../../Button/Button"
import generateXLSX from "../../../Services/generateAndDownloadXLSX"


class DownloadXLSX extends Component {
    download = () => {
        const data = this.props.data
        generateXLSX(data)
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