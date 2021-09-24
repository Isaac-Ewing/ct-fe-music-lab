import React, { useState, useEffect } from 'react';
import ArtistList from '../components/ArtistList';
import Search from '../components/Search';
import { pagination } from '../hooks/pagination';
import { fetchArtists } from '../services/fetchArtists';

const ArtistContainer = () => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearch] = useState('');
  const [contents, setContents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  
  const handleDecrement = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
    const current = currentPage - 1;
    const startIndex = (current - 1) * 10;
    const endIndex = current * 10;
    setContents(artists.slice(startIndex, endIndex));
  };
  
  const handleIncrement = () => {
    if (currentPage < totalPages) setCurrentPage((page) => page + 1);
    const current = currentPage + 1;
    const startIndex = (current - 1) * 10;
    const endIndex = current * 10;
    setContents(artists.slice(startIndex, endIndex));
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const artistsArray = await fetchArtists(searchTerm);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = currentPage * 10;
    setTotalPages(artistsArray.length / 10);
    setContents(artistsArray.slice(startIndex, endIndex));
    setArtists(artistsArray);
  };
  const handleOtherSearch = ({ target }) => {
    setSearch(target.value);
  };

  const tisOnFirstPage = currentPage <= 1;
  const tisOnLastPage = currentPage >= totalPages;

  return (
    <>
      <Search
        onSubmit={handleSearch}
        onChange={handleOtherSearch}
        searchTerm={searchTerm}
      />
      
      {artists.length ? <ArtistList artists={contents} loading={loading} /> : null}
      <button onClick={handleDecrement} disabled={tisOnFirstPage}>{'<'}</button>
      <button onClick={handleIncrement} disabled={tisOnLastPage}>{'>'}</button>
    </>
  );
};

export default ArtistContainer;
