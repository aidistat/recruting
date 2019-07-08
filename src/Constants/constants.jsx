import React from 'react';
import Select from '../Components/Select/Select';
import JobKg from '../Pages/Jobkg';
import HeadHunter from '../Pages/Headhunter';
import Zensoftio from '../Pages/Zensoftio';
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
    Cell: ({ value }) => String(value).charAt(0).toUpperCase() + String(value).slice(1)
  }
];

export const STATUSES = ['Pending', 'Applied', 'Rejected', 'Interview'];

export const COLUMNS_WITH_STATUSES = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Language',
    accessor: 'language'
  },
  {
    Header: 'Date',
    accessor: 'date'
  },
  {
    Header: 'Status',
    accessor: 'status'
  },
  {
    Header: 'Statuses',
    Cell: props => {
      return <Select options={STATUSES} />;
    }
  }
];

export const ALL_PEOPLE = [
  {
    name: 'John',
    language: 'Python',
    date: '06/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Jack',
    language: 'Python',
    date: '05/11/2019',
    status: 'Not Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Jeremy',
    language: 'Java',
    date: '04/22/2019',
    status: 'Not Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={STATUSES} />
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

export const TECHNOLOGIES_FOR_ADD = ['Recomented', 'NetWork'];

export const STATUS = ['True', 'False'];

export const ROUTES = [
  { title: 'Job.kg', path: '/jobkg', component: JobKg, newTab: false },
  { title: 'HeadHunter', path: '/hh', component: HeadHunter, newTab: false},
  { title: 'Zensoft.io', path: '/zensoftio', component: Zensoftio, newTab: false},
  { title: 'Entire DataBase', path: '/entiredb', component: Whole, newTab: false},
  {title: 'Report', path: '/report', component: Report, newTab: true}
];

export const URL = "http://172.16.0.30:8081/summary";

export const SOURSE = {Recomented: 3, netWork: 4}
