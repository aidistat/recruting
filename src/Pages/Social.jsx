import React, { Component } from 'react';
import Filters from '../Components/Filters/Filters';
import Table from '../Components/Table/Table';
import * as Constants from '../Constants/constants';
import { setUsersAC } from '../redux/user-reducer';
import { connect } from 'react-redux';
import Search from '../Components/Search/Search';
import * as Services from '../Services/basicServices';

class Social extends Component {

    async doSearch(value) {
        if (!value || value === ' ') {
            let data = await Services.fetchJson(Constants.URL_SOCIAL);
            this.props.setUsers(data.content);
        } else {
            let data = await Services.fetchJson(`${Constants.URL_SOCIAL}&fullName=${value}`);
            this.props.setUsers(data.content);
        }
    }

    componentDidMount() {
        Services.fetchJson(Constants.URL_SOCIAL)
            .then(data => this.props.setUsers(data.content));
    }

    render() {
        return (
            <div>
                <Filters url={Constants.URL_SOCIAL}/>
                <Search onSearch={value => this.doSearch(value)} />
                <Table columns={Constants.COLUMNS_FOR_SOCIAL} data={this.props.users} />
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
)(Social);