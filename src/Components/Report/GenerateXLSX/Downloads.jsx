import React, { Component } from "react";
import Button from "../../Button/Button"
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import generateArray from "./generateResultArray"


class DownloadXLSX extends Component {
    download = () => {
        const dates = this.props
        const resultArray = generateArray(dates)
        // console.log(dates)
        const wb = this.generateXLSX(dates)
        const buf = this.createBuff(wb)
        saveAs(new Blob([buf], { type: "application/octet-stream"}), 'report.xlsx');

    }

    createBuff(wb) {
        console.log("createBuf")
        var buf = new ArrayBuffer(wb.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf);  //create uint8array as viewer
        for (var i = 0; i < wb.length; i++) view[i] = wb.charCodeAt(i) & 0xFF; //convert to octet
        return buf;
    }

    generateXLSX(dates) {
        console.log("generate")
        let wb = XLSX.utils.book_new();
        wb.Props = {}
        wb.SheetNames.push("Report");
        // let date = [["Период", "17.06.2019 - 21.06.2019"],["Вакансии:" ]]
        let ws = XLSX.utils.aoa_to_sheet(dates);
        wb.Sheets["Report"] = ws;
        var out = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        return out;
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