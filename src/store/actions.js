export const SET_ALBUMS = 'SET_ALBUMS';
export const SET_SELECTED_ALBUM = 'SET_SELECTED_ALBUM';
export const ADD_REVIEW = 'ADD_REVIEW';
export const SET_REVIEWS = 'SET_REVIEWS';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

export const setAlbumsAction = albums => {
    return dispatch => {
        dispatch({
        type: SET_ALBUMS,
        albums: albums
        });
    };
};

export const setSelectedAlbumAction = album => {
    return dispatch => {
        dispatch({
            type: SET_SELECTED_ALBUM,
            album: album
        });
    };
};

export const addReviewAction = review => {
    return dispatch => {
        dispatch({
            type: ADD_REVIEW,
            review: review
        });
    };
};

export const setReviewsAction = reviews => {
    return dispatch => {
        dispatch({
            type: SET_REVIEWS,
            reviews: reviews
        });
    };
};

export const updateReviewAction = review => {
    return dispatch => {
        dispatch({
            type: UPDATE_REVIEW,
            review: review
        });
    };
};