import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from '../components/Lyrics';
import { fetchLyrics } from '../services/fetchArtists';

const LyricsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState([]);
  const { title, artist } = useParams();

  useEffect(() => {
    const loadLyrics = async () => {
      const words = await fetchLyrics(artist, title);
      setLyrics(words);
      setLoading(false);
    };
    loadLyrics();
  }, []);
  if (loading)
    return (<img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />);
  return (
    <>
      <Lyrics lyrics={lyrics} loading={loading} />
    </>
  );
};

export default LyricsContainer;
