import React, { useState, useEffect } from 'react';
import { fetchRecordings } from '../services/fetchArtists';
import { useParams } from 'react-router-dom';
import RecordingList from '../components/RecordingList';


const RecordingsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const { id, artist } = useParams();

  useEffect(() => {
    console.log(id);
    const loadRecordings = async () => {
      const songs = await fetchRecordings(id);
      setRecordings(songs);
    };
    loadRecordings();
  }, []);

  return (
    <>
      <RecordingList recordings={recordings} loading={loading} artist={artist}/>
    </>
  );
};

export default RecordingsContainer;
