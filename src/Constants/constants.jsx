import React from 'react';
import Select from '../Components/Select/Select';
import JobKg from "../Pages/Jobkg";
import HeadHunter from "../Pages/Headhunter";
import Zensoftio from "../Pages/Zensoftio";
import Whole from "../Pages/Whole";

export const HEADERS = [
  { key: 'name', title: 'Full Name', sortable: true },
  { key: 'language', title: 'Language', sortable: true },
  { key: 'date', title: 'Date', sortable: true },
  { key: 'status', title: 'Status', sortable: true }
];

export const HEADER_WITH_STATUSES = [
  { key: 'name', title: 'Full Name', sortable: true },
  { key: 'language', title: 'Language', sortable: true },
  { key: 'date', title: 'Date', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
  { key: 'statuses', title: 'Statuses', sortable: false }
];

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
  }
];

export const STATUSES = ['Pending', 'Applied', 'Rejected', 'Interview'];

export const ALL_PEOPLE = [
  {
    name: 'John',
    language: 'Python',
    date: '06/12/2019',
    status: 'Checked',
    statuses: <Select options={statuses} />
  },
  {
    name: 'Jack',
    language: 'Python',
    date: '05/11/2019',
    status: 'Not Checked',
    statuses: <Select options={statuses} />
  },
  {
    name: 'Jeremy',
    language: 'Java',
    date: '04/22/2019',
    status: 'Not Checked',
    statuses: <Select options={statuses} />
  },
  {
    name: 'Joe',
    language: 'C#',
    date: '07/12/2019',
    status: 'Checked',
    statuses: <Select options={statuses} />
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

export const STATUS = ['Checked', 'Not Checked'];

export const ROUTES = [
  { title: 'Job.kg', path: '/jobkg',  component: JobKg },
  { title: 'HeadHunter', path: '/hh',  component: HeadHunter },
  { title: 'Zensoft.io', path: '/zensoftio',  component: Zensoftio },
  { title: 'Entire DataBase', path: '/entiredb',  component: Whole }
];
