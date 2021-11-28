import { useHistory } from 'react-router-dom';
import AlbumDetails from '../components/album/AlbumDetails';
import AlbumReviewsList from '../components/album/AlbumReviewsList';
import { useState, useEffect } from 'react';
import AlbumReviewsForm from '../components/album/AlbumReviewsForm';

function AlbumDetailsPage() {
  const history = useHistory();
  const selectedAlbum = '';

  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
        'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const reviews = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          reviews.push(meetup);
        }

        setIsLoading(false);
        setReviews(reviews);
      });
  }, []);

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