import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

const ReleaseList = ({ releases, loading }) => {
  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
    );

  return (
    <ul aria-label="releases" title="releases">
      {releases.map((release) => (
        <li key={release.id}>
          <Release
            id={release.id}
            title={release.title}
          />
        </li>
      ))}
    </ul>
  );
};

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ReleaseList;
