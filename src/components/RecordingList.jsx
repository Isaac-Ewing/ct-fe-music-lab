import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';

const RecordingList = ({ recordings, loading, artist }) => {
  if (loading)
    return (<img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />);

  return (
    <ul aria-label="recordings" name="recordings"> 
      {recordings.map((recording) => (
        <li key={recording.id}>
          <Recording id={recording.id} title={recording.title} artist={artist} />
        </li>
      )) }
    </ul>
  );
};

RecordingList.propTypes = {
  recordings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  artist: PropTypes.string.isRequired,
};
  
export default RecordingList;
