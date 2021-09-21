import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ id, name, score }) => (
  <>
    <Link to={`/${id}`}>{name}</Link>
    <h3>{score}</h3>
  </>
);

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Artist;
