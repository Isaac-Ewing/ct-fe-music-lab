import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Release = ({ id, title }) => (
  <>
    <Link to={`/${id}`}>{title}</Link>
  
  </>
);

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Release;
