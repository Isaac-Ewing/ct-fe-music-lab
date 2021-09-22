import React, { useState, useEffect } from 'react';
import ReleaseList from '../components/ReleaseList';
import { fetchReleases } from '../services/fetchArtists';
import { useParams } from 'react-router-dom';

const ReleasesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [releases, setReleases] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const loadRelease = async () => {
      const releases = await fetchReleases(id);
      setReleases(releases);
    };
    loadRelease();
  }, []);

  return (
    <>
      {releases.length ? (
        <ReleaseList releases={releases} loading={loading} />
      ) : (
        0
      )}
    </>
  );
};

export default ReleasesContainer;
