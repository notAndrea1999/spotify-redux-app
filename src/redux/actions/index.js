export const SET_ALBUM = "SET_ALBUM";
export const SET_ALBUM_PAGE = "SET_ALBUM_PAGE";
export const SET_ARTIST_PAGE = "SET_ALBUM_PAGE";

export const setAlbum = (data) => ({ type: SET_ALBUM, payload: data });
export const setAlbumPage = (data) => ({ type: SET_ALBUM_PAGE, payload: data });
export const setArtistPage = (data) => ({ type: SET_ARTIST_PAGE, payload: data });
