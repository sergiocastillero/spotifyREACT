import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';

const Search = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  const handleSearch = (results) => {
    console.log(results);
    setTracks(results.tracks);
    setArtists(results.artists);
    setAlbums(results.albums);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <SearchList tracks={tracks} albums={albums} artists={artists} />
    </div>
  );
};

export default Search;
