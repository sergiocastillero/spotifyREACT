const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "d48f35d6ffd7471cace8c813533c6c6c";
//const clientSecretId = '65882ba7e1684408991ff00f69de0966';

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
