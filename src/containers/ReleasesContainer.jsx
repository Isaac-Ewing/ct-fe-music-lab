import React, { useState, useEffect } from 'react';
import ReleaseList from '../components/ReleaseList';
import { fetchReleases } from '../services/fetchArtists';
import { useParams } from 'react-router-dom';

const ReleasesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [releases, setReleases] = useState([]);
  const { id, artist } = useParams();
  const [contents, setContents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  
  const handleDecrement = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
    const current = currentPage - 1;
    const startIndex = (current - 1) * 10;
    const endIndex = current * 10;
    setContents(releases.slice(startIndex, endIndex));
  };
  
  const handleIncrement = () => {
    if (currentPage < totalPages) setCurrentPage((page) => page + 1);
    const current = currentPage + 1;
    const startIndex = (current - 1) * 10;
    const endIndex = current * 10;
    setContents(releases.slice(startIndex, endIndex));
  };
  
  useEffect(() => {
    const loadRelease = async () => {
      const releasesArray = await fetchReleases(id);
      const startIndex = (currentPage - 1) * 10;
      const endIndex = currentPage * 10;
      setTotalPages(releasesArray.length / 10);
      setContents(releasesArray.slice(startIndex, endIndex));
      setReleases(releasesArray);
    };
    loadRelease();
  }, [handleIncrement, handleDecrement]);

  const tisOnFirstPage = currentPage <= 1;
  const tisOnLastPage = currentPage >= totalPages;

  return (
    <>
      {releases.length ? (
        <ReleaseList releases={contents} loading={loading} artist={artist}/>
      ) : (
        0
      )}
      <button onClick={handleDecrement} disabled={tisOnFirstPage}>{'<'}</button>
      <button onClick={handleIncrement} disabled={tisOnLastPage}>{'>'}</button>
    </>
  );
};

export default ReleasesContainer;
