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


function getAllResume(obj){
    let result = [];
    const origin = Object.keys(obj);
    let keys = []
    for(let i = 0; i < origin.length; i++){
        keys = keys.concat(Object.keys(obj[origin[i]]));
    }
    keys = Array.from(new Set(keys));
    result = keys.map(
        (key) =>{
            let value = 0;
            for(let originIterator = 0; originIterator < origin.length; originIterator ++){
                if(obj[origin[originIterator]][key]){
                    value += obj[origin[originIterator]][key]
                };
            }
            return {A: key, B: value}
        }
    )
    return result

}

function generateArray(date){
    const hh = date.dates.sources.hh;
    const jobkg = date.dates.sources.jobkg;
    const gmail = date.dates.sources.gmail;
    let resultArray = 
    [
        {A:"Период:", B:`${date.dates.interval.startDate} - ${date.dates.interval.endDate}`},
        {},
        {A: "Вакансии:"},
        {},
        {},
        {},
        {},
        {A: `Принято и просмотрено резюме (job.kg + HH.kg + корпоративная почта).`},


    ];
    const all = getAllResume({hh: hh, jobkg: jobkg, gmail: gmail})
    resultArray = resultArray.concat(all)
    // console.log(resultArray)

    return resultArray;
}
export default generateXLSX;