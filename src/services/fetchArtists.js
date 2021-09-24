export const fetchArtists = async (searchTerm) => {
  const response = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=100`
  );
  const json = await response.json();
  const artists = json.artists;
  return artists;
};

export const fetchReleases = async (id) => {
  const response = await fetch(
    `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
  );
  const json = await response.json();
  const releases = json.releases;
  return releases;
};

export const fetchCoverArt = async (id) => {
  try {
    const response = await fetch(
      `http://coverartarchive.org/release/${id}/front`
    );
    const coverUrl = response.url;
    return coverUrl;
  } catch (error) {
    const noCoverUrl =
      'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';

    return noCoverUrl;
  }
};

export const fetchRecordings = async (id) => {
  const response = await fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`);
  const json = await response.json();
  const recordings = json.recordings;
  return recordings;
};

export const fetchLyrics = async (artist, title) => {
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const json = await response.json();
  const lyrics = json.lyrics;
  return lyrics;
};

// http://coverartarchive.org/release/<RELEASE_ID>/front
