import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchCoverArt } from '../services/fetchArtists';



const Release = ({ id, title, artist }) => {
  const [coverArt, setCoverArt] = useState();


  useEffect(() => {
    console.log(artist);
    const loadCoverArt = async () => {
      const coverArt = await fetchCoverArt(id);
      console.log(coverArt, 'coverArt after fetch HERE');
      (coverArt);
      setCoverArt(coverArt);
    };
    loadCoverArt();
  }, []);
  


  return (<>
    <Link to={`/recordings/${artist}/${id}`}>{title}</Link>
    <img src={coverArt} />
  </>
  );
};

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Release;
