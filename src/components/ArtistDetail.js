import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Detail.css';
import BackIcon from '../assets/svg/back.svg';
import { TokenContext } from './Context';
import getAllArtist from '../services/getAllArtist';

const ArtistDetail = ({ artist }) => {
  const [token, setToken] = useContext(TokenContext);

  // Función para formatear el número con puntos
  const formatNumberWithDots = (number) => {
    return number.toLocaleString();
  };

  // Estado para guardar los resultados de álbumes, títulos de playlists y títulos de radios
  const [albums, setAlbum] = useState([]);
  const [playlists, setPlaylist] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Llamada a getAllArtist con el nombre del artista y el token
    const fetchData = async () => {
      try {
        const data = await getAllArtist(artist.name, token); // Llama a getAllArtist con el nombre del artista y el token

        setAlbum(data.albums.items); // Asigna los resultados de álbumes a albumResults
        setPlaylist(data.playlists.items); // Asigna los títulos de playlists a playlistTitles
        setShows(data.shows.items); // Asigna los títulos de radios a radioTitles
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [artist.name, token]);

  return (
    <div className="artistDetail">
      <a href="/search" className="backButton">
        <img className="back-button" src={BackIcon} alt="back" />
      </a>
      <img src={artist.images[0].url} alt={artist.name} className='headerImage' />
      <div className='headerInfo'>
        <h1>{artist.name}</h1>
        <p className='followers'>{formatNumberWithDots(artist.followers.total)} {artist.followers.total === 1 ? 'seguidor' : 'seguidores'}</p>
      </div>
      {albums.length > 0 && (
        <div>
          <h2>Albums</h2>
          <div className="albumsList">
            {albums.map((album) => (
              /*<Link to={`/detail/${album.type}/${album.id}`} key={album.id}>*/
                <div key={album.id} className="album_item">
                  <img src={album.images[0].url} alt={album.name} />
                  <div className="album_item_details">
                    <h3>{album.name}</h3>
                    <p>{album.artists.map((artist) => artist.name).join(', ')}</p>
                  </div>
                </div>
              /*</Link>*/
            ))}
          </div>
        </div>
      )}
      {playlists.length > 0 && (
        <div>
          <h2>Playlists</h2>
          <div className="playlistsList">
            {playlists.map((playlist) => (
              /*<Link to={`/detail/${playlist.type}/${playlist.id}`} key={playlist.id}>*/
                <div key={playlist.id} className="playlist_item">
                  <img src={playlist.images[0].url} alt={playlist.name} />
                  <div className="playlist_item_details">
                    <h3>{playlist.name}</h3>
                  </div>
                </div>
              /*</Link>*/
            ))}
          </div>
        </div>
      )}
      {shows.length > 0 && (
        <div>
          <h2>Radio</h2>
          <div className="showsList">
            {shows.map((show) => (
              /*<Link to={`/detail/${show.type}/${show.id}`} key={show.id}>*/
                <div key={show.id} className="show_item">
                  <img src={show.images[0].url} alt={show.name} />
                  <div className="show_item_details">
                    <h3>{show.name}</h3>
                  </div>
                </div>
              /*</Link>*/
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
