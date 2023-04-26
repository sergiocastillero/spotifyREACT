const getMusicList = async (query, token) => {
    const headerObj = new Headers();
    headerObj.append('Content-Type', 'application/json');
    headerObj.append('Authorization', `Bearer ${token}`);

    const opt = { method: 'GET', headers: headerObj };
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;

    let response = await fetch(url, opt);
    let data = await response.json();

    return data;
};

export default getMusicList;
