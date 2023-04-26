import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
import { ReactComponent as LibraryIcon } from '../assets/svg/library.svg';
import { ReactComponent as SpotifyLogo } from '../assets/svg/spotify.svg';


import '../styles/Menu.css';
import { TokenContext } from './Context';
import { loginUrl } from '../spotifyKeys';

const Menu = () => {

  const [token, setToken] = useContext(TokenContext);

  const logout = () => {
    console.log("click")
    setToken("");
  }

  return (
    <div>
      <div className="header">
        <div className="login-container">
          {
            !token ?
              <a className="spoty-button" href={loginUrl}>Login</a>
              :
              <button onClick={logout} className="spoty-button">Logout</button>
          }
        </div>
      </div>
      <nav>
        <ul className="navigationContainer">
          <div className="menu">
            <div className="logo">
              <SpotifyLogo className='spotifyLogo' />
            </div>
            <Link to="/"><li><HomeIcon /><span>Inicio</span></li></Link>
            <Link to="/search"><li><SearchIcon /><span>Buscar</span></li></Link>
            <Link to="/lists"><li><LibraryIcon /><span>Tu biblioteca</span></li></Link>
          </div>
        </ul>
      </nav>
      <div className="content">
      </div>
    </div>
  );
}

export default Menu;