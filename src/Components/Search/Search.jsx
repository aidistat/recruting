import React, { Component } from 'react';
import './search.css';
import SearchIcon from '@material-ui/icons/Search';

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
          <input
            placeholder="Search…"
            type="text"
            onChange={e => this.doSearch(e)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
