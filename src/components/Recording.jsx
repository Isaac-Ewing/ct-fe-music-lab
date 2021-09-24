import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recording = ({ id, title, artist }) => (
  <>
    <Link to={`/lyrics/${artist}/${title}`}>{title}</Link>
  </>
);

Recording.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Recording;
