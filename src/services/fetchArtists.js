export const fetchArtists = async (searchTerm) => {
  const response = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25`
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

// http://coverartarchive.org/release/<RELEASE_ID>/front
