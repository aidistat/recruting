import React, { Component } from 'react';
import Filters from '../Components/Filters/Filters';
import Table from '../Components/Table/Table';
import * as Constants from '../Constants/constants';
import { setUsersAC } from '../redux/user-reducer';
import { connect } from 'react-redux';
import Search from '../Components/Search/Search';
import * as Services from '../Services/basicServices';

class Recommended extends Component {

    async doSearch(value) {
        if (!value || value === ' ') {
            let data = await Services.fetchJson(Constants.URL_REFERRAL);
            this.props.setUsers(data.content);
        } else {
            let data = await Services.fetchJson(`${Constants.URL_REFERRAL}&fullName=${value}`);
            this.props.setUsers(data.content);
        }
    }

    componentDidMount() {
        Services.fetchJson(Constants.URL_REFERRAL)
            .then(data => this.props.setUsers(data.content));
    }

    render() {
        return (
            <div>
                <Filters url={Constants.URL_REFERRAL}/>
                <Search onSearch={value => this.doSearch(value)} />
                <Table columns={Constants.COLUMNS_FOR_RECOMMENDED} data={this.props.users} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsers: users => {
            dispatch(setUsersAC(users));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recommended);