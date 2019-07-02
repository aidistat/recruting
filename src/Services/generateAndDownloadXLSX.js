import XLSX from 'xlsx';
import { saveAs } from 'file-saver';


function generateXLSX(dates){
    const resultArray = generateArray(dates)
    const wb = generateWB(resultArray)
    const buf =createBuff(wb)
    saveAs(new Blob([buf], { type: "application/octet-stream"}), 'report.xlsx');

}

function createBuff(wb) {
    var buf = new ArrayBuffer(wb.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < wb.length; i++) view[i] = wb.charCodeAt(i) & 0xFF;
    return buf;
}

function generateWB(dates) {
    let wb = XLSX.utils.book_new();
    // wb.Props = {}
    wb.SheetNames.push("Report");

    let ws = XLSX.utils.json_to_sheet(dates, {header:["A","B","C","D","E","F"], skipHeader:true});
    wb.Sheets["Report"] = ws;
    var out = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    return out;
}


function generateArray(data){
    
    let resultArray = 
    [
        {A:"Период:", B:`${data.dates.start} - ${data.dates.end}`},
        {},
        {A: "Вакансии:"},
        {},
        {},
        {},
        {},
        {A: `Принято и просмотрено резюме (job.kg + HH.kg + корпоративная почта).`, D: ``},
        

    ];
    // console.log(resultArray)

    return resultArray;
}
export default generateXLSX;