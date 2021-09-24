import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label>
        Find an Artist:
      <input type="text" name ="searchTerm" onChange={onChange} value={searchTerm} />
    </label>
    <button aria-label="search-button">Submit</button>
  </form>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
