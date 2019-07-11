import React from 'react';
import JobKg from '../Pages/Jobkg';
import HeadHunter from '../Pages/Headhunter';
import Zensoftio from '../Pages/Zensoftio';
import Recommended from '../Pages/Recommended';
import Social from '../Pages/Social';
import Whole from '../Pages/Whole';
import moment from 'moment';
import Report from "../Pages/Report";

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
    accessor: 'url',
    Cell: ({value}) => <a href={value} target="_blank">CV</a>
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

export const STATUSES_OBJ = {
  0: "PENDING",
  1: "APPLIED",
  2: "CALLED",
  3: "REJECTED",
  4: "INTERVIEW"
}

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
    accessor: 'url',
    Cell: ({value}) => <a href={value} target="_blank">CV</a>
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
    accessor: 'statuses',
    Cell: ({value}) => STATUSES_OBJ[value] || ''
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
    accessor: 'adviser'
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => moment(value).format('MM/DD/YYYY')
  },
  {
    Header: 'Link',
    accessor: 'url',
    Cell: ({value}) => <a href={value} target="_blank">CV</a>
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
    accessor: 'url',
    Cell: ({value}) => <a href={value} target="_blank">CV</a>
  }
];

export const STATUSES = [{name: 'True'},{name: 'False'}];

export const ROUTES = [
  {title: 'Referral', path: '/recommended', component: Recommended, newTab: false},
  {title: 'Social', path: '/social', component: Social, newTab: false},
  { title: 'Job.kg', path: '/jobkg', component: JobKg, newTab: false },
  { title: 'HeadHunter', path: '/hh', component: HeadHunter, newTab: false},
  { title: 'Zensoft.io', path: '/zensoftio', component: Zensoftio, newTab: false},
  { title: 'Entire DataBase', path: '/entiredb', component: Whole, newTab: false},
  {title: 'Report', path: '/report', component: Report, newTab: true},
];

export const URL = "http://localhost:8081/summary?size=50";
export const URL_HH = "http://localhost:8081/summary/sources/hh?size=50";
export const URL_JOBKG = "http://localhost:8081/summary/sources/jobkg?size=50";
export const URL_GMAIL = "http://localhost:8081/summary/sources/gmail?size=50";
export const URL_REFERRAL = "http://localhost:8081/summary/sources/fromadvisor?size=50";
export const URL_SOCIAL = "http://localhost:8081/summary/sources/social?size=50";
export const URL_POSITION = "http://localhost:8081/position";
