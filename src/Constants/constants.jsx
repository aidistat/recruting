import React from 'react';
import JobKg from '../Pages/Jobkg';
import HeadHunter from '../Pages/Headhunter';
import Zensoftio from '../Pages/Zensoftio';
import Recommended from '../Pages/Recommended';
import Social from '../Pages/Social';
import Whole from '../Pages/Whole';
import moment from 'moment';
import Report from '../Pages/Report';

export const PEOPLE = [
  {
    name: 'John',
    language: 'Python',
    date: '06/12/2019',
    status: 'Checked'
  },
  {
    name: 'Jack',
    language: 'Python',
    date: '05/11/2019',
    status: 'Not Checked'
  },
  {
    name: 'Jeremy',
    language: 'Java',
    date: '04/22/2019',
    status: 'Not Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked'
  }
];
export const TEST = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Name',
    accessor: 'fullName'
  },
  {
    Header: 'test',
    accessor: 'test'
  },
  {
    Header: 'Actions',
    Cell: props => {
      return <button onClick={i => console.log(i)}>DELETE</button>;
    }
  }
];
export const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'fullName'
  },
  {
    Header: 'Language',
    accessor: 'position.name'
  },
  {
    Header: 'Link',
    accessor: 'link'
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => moment(value).format('MM/DD/YYYY')
  },
  {
    Header: 'Checked',
    accessor: 'checked',
    Cell: ({ value }) =>
      String(value)
        .charAt(0)
        .toUpperCase() + String(value).slice(1)
  }
];

export const STATUSES_OBJ = {
  0: 'PENDING',
  1: 'APPLIED',
  2: 'CALLED',
  3: 'REJECTED',
  4: 'INTERVIEW'
};

export const COLUMNS_WHOLEDB = [
  {
    Header: 'Name',
    accessor: 'fullName'
  },
  {
    Header: 'Language',
    accessor: 'position.name'
  },
  {
    Header: 'Link',
    accessor: 'link'
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => moment(value).format('MM/DD/YYYY')
  },
  {
    Header: 'Checked',
    accessor: 'checked',
    Cell: ({ value }) =>
      String(value)
        .charAt(0)
        .toUpperCase() + String(value).slice(1)
  },
  {
    Header: 'Status',
    accessor: 'statuses',
    Cell: ({ value }) => STATUSES_OBJ[value] || ''
  },
  {
    Header: 'Edit',
    accessor: 'edit'
  }
];

export const COLUMNS_FOR_RECOMMENDED = [
  {
    Header: 'Name',
    accessor: 'fullName'
  },
  {
    Header: 'Language',
    accessor: 'position.name'
  },
  {
    Header: 'From',
    accessor: 'from'
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => moment(value).format('MM/DD/YYYY')
  },
  {
    Header: 'Link',
    accessor: 'link'
  }
];

export const COLUMNS_FOR_SOCIAL = [
  {
    Header: 'Name',
    accessor: 'fullName'
  },
  {
    Header: 'Language',
    accessor: 'position.name'
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => moment(value).format('MM/DD/YYYY')
  },
  {
    Header: 'Link',
    accessor: 'link'
  }
];

// export const TECHNOLOGIES = [
//   'JavaScript',
//   'Python',
//   'Java',
//   'Project Manager',
//   'QA Engineer',
//   'C#'
// ];

export const STATUS = ['True', 'False']; //This constant used for options in Select.

export const ROUTES = [
  {
    title: 'Referral',
    path: '/recommended',
    component: Recommended,
    newTab: false
  },
  { title: 'Social', path: '/social', component: Social, newTab: false },
  { title: 'Job.kg', path: '/jobkg', component: JobKg, newTab: false },
  { title: 'HeadHunter', path: '/hh', component: HeadHunter, newTab: false },
  {
    title: 'Zensoft.io',
    path: '/zensoftio',
    component: Zensoftio,
    newTab: false
  },
  {
    title: 'Entire DataBase',
    path: '/entiredb',
    component: Whole,
    newTab: false
  },
  { title: 'Report', path: '/report', component: Report, newTab: true }
];

export const URL = 'http://172.16.0.30:8081/summary';
export const REPORT_URL = 'http://172.16.0.30:8081/report?';

export const SOURCE = { Recommended: 3, NetWork: 4 };
export const TECHNOLOGIES_FOR_ADD = ['Recommended', 'NetWork'];

// export const POSITIONS = {
//   JavaScript: 3,
//   Python: 2,
//   HR: 4,
//   Java: 27,
//   'Project Manager': 4,
//   'QA Engineer': 31,
//   'C#': 28
// };

export const POSITIONS = [
  {
    name: 'Python',
    id: 2
  },
  {
    name: 'JavaScript',
    id: 3
  },
  {
    name: 'HR',
    id: 4
  },
  {
    name: 'Java',
    id: 27
  },
  {
    name: 'C#',
    id: 28
  },
  {
    name: 'QA Engineer',
    id: 31
  },
  {
    name: 'Администратор',
    id: 38
  },
  {
    name: 'dawgdh',
    id: 39
  }
];

export const STATUSES = [
  'CALLED',
  'INTERVIEW',
  'PENDING',
  'REJECTED',
  'APPLIED'
];

export const URL_POSITION = 'http://localhost:8081/position';
