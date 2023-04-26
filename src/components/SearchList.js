import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Lists.css';
import '../styles/searchBar.css';
import userProfile from '../assets/img/profile.png';

const SearchList = ({ tracks, albums, artists }) => {
  return (
    <div className="searchContainer">
      <div className='firstView'>
        {artists.length > 0 && (
          <div className='firstArtist'>
            <h2>Resultado Principal</h2>
            <Link to={`/detail/${artists[0].type}/${artists[0].id}`} key={artists[0].id}>
              <div className='firstArtist_item'>
                {artists[0].images && artists[0].images.length > 0 ? (
                  <img src={artists[0].images[0].url} alt={artists[0].name} />
                ) : (
                  <img src={userProfile} alt={artists[0].name} />
                )}
                <h1 className="artist">{artists[0].name}</h1>
              </div>
            </Link>
          </div>
        )}
        {tracks.length > 0 && (
          <div className="tracksList">
            <h2>Canciones</h2>
            <div>
              {tracks.slice(0, 5).map((track) => (
                <Link to={`/detail/${track.album.type}/${track.album.id}`} key={track.id}>
                  <div key={track.id} className="track_item">
                    <img src={track.album.images[0].url} alt={track.name} />
                    <div className="track_item_details">
                      <h3>{track.name}</h3>
                      <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {albums.length > 0 && (
        <div>
          <h2>Albums</h2>
          <div className="albumsList">
            {albums.map((album) => (
              <Link to={`/detail/${album.type}/${album.id}`} key={album.id}>
                <div key={album.id} className="album_item">
                  <img src={album.images[0].url} alt={album.name} />
                  <div className="album_item_details">
                    <h3>{album.name}</h3>
                    <p>{album.artists.map((artist) => artist.name).join(', ')}</p>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      )}
      {artists.length > 0 && (
        <div>
          <h2>Artistas</h2>
          <div className="artistsList">
            {artists.map((artist) => (
              <Link to={`/detail/${artist.type}/${artist.id}`} key={artist.id}>
                <div key={artist.id} className="artist_item">
                  {artist.images && artist.images.length > 0 ? (
                    <img src={artist.images[0].url} alt={artist.name} />
                  ) : (
                    <img src={userProfile} alt={artist.name} />
                  )}
                  <h3 className="artist">{artist.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchList;