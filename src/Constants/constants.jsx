import React from 'react';
import JobKg from '../Pages/Jobkg';
import HeadHunter from '../Pages/Headhunter';
import Zensoftio from '../Pages/Zensoftio';
import Recommended from '../Pages/Recommended';
import Social from '../Pages/Social';
import Whole from '../Pages/Whole';
import moment from 'moment';
import Report from '../Pages/Report';
import Button from "../Components/Button/Button";

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
    Cell: ({ value }) => (
      <Button text="CV">
        <a href={value} target="_blank" />
      </Button>
    )
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
    Cell: ({ value }) => (
        <a href={value} target="_blank"><Button text="CV" /></a>
    )
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
    Cell: ({ value }) => String(value)
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
    Cell: ({ value }) => (
        <Button text="CV">
          <a href={value} target="_blank" />
        </Button>
    )
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
    Cell: ({ value }) => (
        <Button text="CV">
          <a href={value} target="_blank" />
        </Button>
    )
  }
];

export const STATUSES = [{ name: 'True' }, { name: 'False' }];

export const sourcesForAddCV = [
  { id: 3, name: 'FROMADVISOR' },
  { id: 4, name: 'SOCIAL' }
];

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
export const BASIC_URL = 'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary';
export const URL = 'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary?size=50';
export const URL_HH = 'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary/sources/hh?size=50';
export const URL_JOBKG =
  'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary/sources/jobkg?size=50';
export const URL_GMAIL =
  'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary/sources/gmail?size=50';
export const URL_REFERRAL =
  'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary/sources/fromadvisor?size=50';
export const URL_SOCIAL =
  'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/summary/sources/social?size=50';
export const URL_POSITION = 'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/position';
export const URL_STATUSES = 'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/statuses';
export const URL_REPORT = 'http://zenhr-env.3vdbywfeib.eu-west-1.elasticbeanstalk.com:8081/report?';
