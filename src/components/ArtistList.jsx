import React from 'react';
import PropTypes from 'prop-types';
import Artist from './ArtistForList';

const ArtistList = ({ artists, loading }) => {
  if (loading)
    return (<img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />);
   
  return (
    <ul aria-label="artists" name="artists"> 
      {artists.map((artist) => (
        <li key={artist.id}>
          <Artist id={artist.id} name={artist.name} score={artist.score} />
        </li>
      )) }
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired
};

export default ArtistList;
