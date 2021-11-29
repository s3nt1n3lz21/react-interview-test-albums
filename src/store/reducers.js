import { 
    SET_ALBUMS, 
    SET_SELECTED_ALBUM,
    ADD_REVIEW,
    SET_REVIEWS,
    UPDATE_REVIEW
} from './actions';

const initialState = {
  albums: [],
  selectedAlbum: null,
  reviews: []
};

const albumReducer = (state = initialState, action) => {
  let newReviews = null;
  switch (action.type) {
    case SET_ALBUMS:
        return { ...state, albums: action.albums };
    case SET_SELECTED_ALBUM:
        return { ...state, selectedAlbum: action.album };
    case ADD_REVIEW:
        newReviews = [...state.reviews];
        newReviews.push(action.review);
        return { ...state, reviews: newReviews };
    case SET_REVIEWS:
        return { ...state, reviews: action.reviews };
    case UPDATE_REVIEW:
        newReviews = [...state.reviews];
        const reviewIndex = newReviews.findIndex(
            review => review.id === action.review.id
        );
        newReviews[reviewIndex] = action.review;
        if (reviewIndex < 0) {
            return state;
        } else {
            return { ...state, reviews: newReviews };
        }
    default:
      return state;
  }
};

export default albumReducer;