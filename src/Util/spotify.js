const clientId = '2977b4473b7c41278221c41fe7bca618'
const redirectUri = 'http://127.0.0.1:5174/'
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for accesss token match
        const AccessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiresIn = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1]);

            //

            window.setTimeout(() => accessToken = ''. expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`), {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }.then(Response => {
            return Response.json();
        }).then(jsonResponse.tracks) {
            if (!jsonResponse.tracks) {
                return [];

            }
            return jsonResponse.tracks.tracks.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artist[0].name,
                album: track.album.name,
                uri: track.uri}));
            };
                
        }

    }


export default Spotify;