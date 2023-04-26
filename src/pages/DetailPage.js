import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { TokenContext } from '../components/Context';
import ArtistDetail from '../components/ArtistDetail';
import AlbumDetail from '../components/AlbumDetail';

const Detail = () => {
  const { type, id } = useParams();
  const [token, setToken] = useContext(TokenContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(token);

    if (type === 'artist') {
      spotifyApi.getArtist(id).then((data) => setItem(data));
    /*     
    } if (type === 'playlist') {
      spotifyApi.getPlaylist(id).then((data) => setItem(data));
    } if (type === 'show') {
      spotifyApi.getShow(id).then((data) => setItem(data));
    */
    }else if (type === 'album') { 
      spotifyApi.getAlbum(id).then((data) => setItem(data));
    }
  }, [type, id, token]);

  return (
    <div className="detail">
      {item && type === 'album' && <AlbumDetail album={item} />}
      {/* 
      {item && type === 'playlist' && <AlbumDetail playlist={item} />}
      {item && type === 'show' && <AlbumDetail playlist={item} />}
       */}
      {item && type === 'artist' && <ArtistDetail artist={item} />}
    </div>
  );
};

export default Detail;