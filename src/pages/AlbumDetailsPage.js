import { useHistory } from 'react-router-dom';
import AlbumDetails from '../components/album/AlbumDetails';

function AlbumDetailsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Album Details</h1>
      <AlbumDetails album={selectedAlbum}/>
    </section>
  );
}

export default AlbumDetailsPage;