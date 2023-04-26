const getAllArtist = async (query, token) => {
  try {
    const headerObj = new Headers();
    headerObj.append('Content-Type', 'application/json');
    headerObj.append('Authorization', `Bearer ${token}`);

    const opt = { method: 'GET', headers: headerObj };
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album,playlist,show`;

    let response = await fetch(url, opt);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${response.statusText}. URL: ${url}`);
    }

    let data = await response.json();
    const albums = data.albums;
    const playlists = data.playlists;
    const shows = data.shows;
    return { albums, playlists, shows };
  } catch (error) {
    console.error(error);
    throw new Error('Error al cargar contenido del artista');
  }
};

export default getAllArtist;