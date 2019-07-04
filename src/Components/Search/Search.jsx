import React, { Component } from 'react';
import './search.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class Search extends Component {
  state = {
    typingTimeout: ''
  };

  doSearch(e) {
    e.persist();
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
    this.setState({
      typingTimeout: setTimeout(() => {
        this.props.onSearch(e.target.value);
      }, 0)
    });
  }
  render() {
    return (
      <div className="search">
        <div className="inner">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'Search' }}
            onChange={e => this.doSearch(e)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
