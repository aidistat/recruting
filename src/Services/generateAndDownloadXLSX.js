import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function generateXLSX(data) {
  const resultArray = generateArray(data);
  const wb = generateWB(resultArray);
  const buf = createBuff(wb);
  saveAs(new Blob([buf], { type: 'application/octet-stream' }), 'report.xlsx');
}

function createBuff(wb) {
  var buf = new ArrayBuffer(wb.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i < wb.length; i++) view[i] = wb.charCodeAt(i) & 0xff;
  return buf;
}

function generateWB(dates) {
  let wb = XLSX.utils.book_new();
  wb.Props = {};
  wb.SheetNames.push('Report');

  let ws = XLSX.utils.json_to_sheet(dates, {
    header: ['A', 'B', 'C', 'D', 'E', 'F'],
    skipHeader: true
  });
  wb.Sheets['Report'] = ws;
  var out = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
  return out;
}

function generateArray({ data, comments }) {

  let resultArray = [
    { A: 'Период:', B: `${data.dates.start} - ${data.dates.end}` }, // 'A' && 'B' ...  -  colunm in .xlsx file
    {},
    { A: 'Вакансии:' }
  ];

  const vacancyArray = comments.vacancy.split('\n');
  vacancyArray.map(vacancy => (resultArray = [...resultArray, { A: vacancy }]));
  resultArray = [...resultArray, {}];
  resultArray = [
    ...resultArray,
    {
      A: `Принято и просмотрено резюме (job.kg + HH.kg + корпоративная почта).`,
      B: data.sum.count
    }
  ];

  resultArray = [...resultArray, {}];

  data.sum.positionList.map(
    position =>
      (resultArray = [
        ...resultArray,
        {
          A: position.position,
          B: position.count
        }
      ])
  );

  data.sourcesList.map(sourse => {
    resultArray = [
      ...resultArray,
      {
        D: sourse.source,
        E: 'Откликнулось',
        F: sourse.count
      }
    ];
    sourse.positionList.map(
      position =>
        (resultArray = [
          ...resultArray,
          {
            E: position.position,
            F: position.count
          }
        ])
    );
    resultArray = [...resultArray, {}];
    return 0;
  });

  data.statusesList.map(status => {
    resultArray = [...resultArray, {}];
    resultArray = [...resultArray, { A: comments[status.status] }];
    resultArray = [...resultArray, { A: status.status }];
    status.positionList.map(position => {
      resultArray = [
        ...resultArray,
        {
          A: position.position,
          B: position.count
        }
      ];
      return 0;
    });
    return 0;
  });

  return resultArray;
}
export default generateXLSX;
