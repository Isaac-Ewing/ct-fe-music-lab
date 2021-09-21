import React, { useState } from 'react';
import ArtistList from '../components/ArtistList';
import Search from '../components/Search';
import { fetchArtists } from '../services/fetchArtists';

const ArtistContainer = () => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearch] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    const artists = await fetchArtists(searchTerm);
    console.log(artists);
    setArtists(artists);
  };

  const handleOtherSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <>
      <Search
        onSubmit={handleSearch}
        onChange={handleOtherSearch}
        searchTerm={searchTerm}
      />
      
      {artists.length ? <ArtistList artists={artists} loading={loading} /> : 0}
    </>
  );
};

export default ArtistContainer;
