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
  console.log(json);
  const releases = json.releases;
  return releases;
};
