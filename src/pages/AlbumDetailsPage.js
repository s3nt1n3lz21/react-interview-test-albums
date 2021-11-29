import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AlbumDetails from '../components/album/AlbumDetails';
import AlbumReviewsList from '../components/album/AlbumReviewsList';
import { useState, useEffect } from 'react';
import AlbumReviewsForm from '../components/album/AlbumReviewsForm';
import { setReviewsAction } from '../store/actions';

function AlbumDetailsPage() {
  const history = useHistory();

  // Component state
  const [isLoading, setIsLoading] = useState(true);

  // App state
  const selectedAlbum = useSelector(state => state.selectedAlbum);
  const reviews = useSelector(state => state.reviews);
  function setReviews(reviews) { dispatch(setReviewsAction(reviews)) };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //       'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const loadedReviews = [];

  //       for (const key in data) {
  //         const loadedReview = {
  //           id: key,
  //           ...data[key]
  //         };

  //         loadedReviews.push(loadedReview);
  //       }

  //       setIsLoading(false);
  //       setReviews(loadedReviews);
  //     });
  // }, []);

  return (
    <section>
      <h1>Album Details</h1>
      <AlbumDetails album={selectedAlbum}/>
      <AlbumReviewsList reviews={reviews}/>
      <AlbumReviewsForm />
    </section>
  );
}

export default AlbumDetailsPage;