
function generateArray(date){
    let resultArray = 
    [
        ["Период:", `${date.interval.startDate} - ${date.interval.endDate}`]
    ];
    return resultArray;
}
export default generateArray;