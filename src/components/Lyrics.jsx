import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => (
  <>
    <span>{lyrics}</span>
  </>
);

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default Lyrics;
