const getAllSearch = async (query, token) => {
  try {
    const headerObj = new Headers();
    headerObj.append('Content-Type', 'application/json');
    headerObj.append('Authorization', `Bearer ${token}`);

    const opt = { method: 'GET', headers: headerObj };
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track,artist,album`;

    const response = await fetch(url, opt);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const { tracks, artists, albums } = data;

    return { tracks: tracks.items, artists: artists.items, albums: albums.items };
  } catch (error) {
    console.error(error);
    throw new Error(error.message || 'Error al realizar la búsqueda');
  } finally {
    // Detener la animación de carga
  }
};

export default getAllSearch;
