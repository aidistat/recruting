import React, { Component } from "react";
import Select from "../Components/Select/Select";

export const headers = [
    {key: "name", title: 'Full Name', sortable: true},
    {key: "language", title: 'Language', sortable: true},
    {key: "date", title: 'Date', sortable: true},
    {key: "status", title: 'Status', sortable: true},
];

export const _headers = [
    {key: "name", title: 'Full Name', sortable: true},
    {key: "language", title: 'Language', sortable: true},
    {key: "date", title: 'Date', sortable: true},
    {key: "status", title: 'Status', sortable: true},
    {key: "statuses", title: 'Statuses', sortable: false},
];

export const data = [
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

export const statuses = ["Pending", "Applied", "Rejected", "Interview"];

export const _data = data.map(i => {
    return (
        {
            ...i,
            Statuses: <Select options={statuses} />
        }
    )
});

export const tech = ["JavaScript", "Python", "Java", "Project Manager", "QA Engineer", "C#"];

export const status = ["Checked", "Not Checked"];

export const nav = [{title: "Job.kg", href: "/jobkg"}, {title: "HeadHunter", href: "/hh"}, {title: "Zensoft.io", href: "/zensoftio"},  {title: "Entire DataBase", href: "/entiredb"}];
