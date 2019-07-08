import React from 'react';
import Select from '../Components/Select/Select';
import JobKg from '../Pages/Jobkg';
import HeadHunter from '../Pages/Headhunter';
import Zensoftio from '../Pages/Zensoftio';
import Recommended from '../Pages/Recommended';
import Social from '../Pages/Social';
import Whole from '../Pages/Whole';
import moment from 'moment';
import Report from "../Pages/Report";

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
    Cell: ({ value }) => String(value).charAt(0).toUpperCase() + String(value).slice(1)
  }
];

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
    Cell: ({ value }) => String(value).charAt(0).toUpperCase() + String(value).slice(1)
  },
  {
    Header: 'Status',
    accessor: 'status'
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
    accessor: 'link',
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
    accessor: 'link',
  }
];

export const TECHNOLOGIES = [
  'JavaScript',
  'Python',
  'Java',
  'Project Manager',
  'QA Engineer',
  'C#'
];

export const STATUS = ['True', 'False'];

export const ROUTES = [
  {title: 'Recommended', path: '/recommended', component: Recommended, newTab: false},
  {title: 'Social', path: '/social', component: Social, newTab: false},
  { title: 'Job.kg', path: '/jobkg', component: JobKg, newTab: false },
  { title: 'HeadHunter', path: '/hh', component: HeadHunter, newTab: false},
  { title: 'Zensoft.io', path: '/zensoftio', component: Zensoftio, newTab: false},
  { title: 'Entire DataBase', path: '/entiredb', component: Whole, newTab: false},
  {title: 'Report', path: '/report', component: Report, newTab: true},
];

export const URL = "http://localhost:8081/summary?";

export const URL_POSITION = "http://localhost:8081/position";
