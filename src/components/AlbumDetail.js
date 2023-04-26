import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Album.css';
import BackIcon from '../assets/svg/back.svg';
import { TokenContext } from './Context';

const AlbumDetail = ({ album }) => {
    const [token, setToken] = useContext(TokenContext);

    const formatDuration = (durationMs) => {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = ((durationMs % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    console.log(album);

    return (
        <div className="albumDetail">
            <img className="ImgPortada" src={album.images[0].url} alt={album.name} />
            <h1>{album.name}</h1>
            <h2>{album.artists.map((artist) => artist.name).join(', ')}</h2>
            <div className="tracksList">
                {album.tracks.items.map((track) => (
                    <div key={track.id} className="track_item">
                        <img src={album.images[0].url} alt={album.name} />
                        <div className="track_item_details">
                            <div className='detailsLeft'>
                                <h3>{track.name}</h3>
                                <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
                            </div>
                            <div className='detailsRight'>
                                <p>{formatDuration(track.duration_ms)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default AlbumDetail;