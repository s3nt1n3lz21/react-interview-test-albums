import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAlbumsAction, setSelectedAlbumAction } from '../store/actions';
import AlbumList from '../components/album/AlbumList';
import classes from './AlbumSearchPage.module.css';
import { useHistory } from 'react-router';

function AlbumSearchPage() {
  const history = useHistory();

  // Component state
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // App state
  const albums = useSelector(state => state.albums);
  function setAlbums(albums) { dispatch(setAlbumsAction(albums)); }
  function setSelectedAlbum(album) { dispatch(setSelectedAlbumAction(album)); }
  const dispatch = useDispatch();

  function searchAlbums() {
    setIsLoading(true);
    fetch(
        'https://itunes.apple.com/search?term=' + searchValue,
    )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('api response: ', data);
        const loadedAlbums = [];

        for (const key in data.results) {
          const loadedAlbum = {
            id: key,
            ...data.results[key]
          };

          loadedAlbums.push(loadedAlbum);
        }

        setIsLoading(false);
        setAlbums(loadedAlbums);
    })
  }

  function searchChangeHandler(event) {
    setSearchValue(event.target.value);
  }

  function itemClickHandler(trackId) {
    console.log('trackId: ', trackId);
    console.log('albums: ', albums);
    const albumIndex = albums.findIndex(
      album => album.trackId === trackId
    )
    console.log('albumIndex: ', albumIndex);
    console.log('albums[albumIndex]: ', albums[albumIndex]);
    setSelectedAlbum(albums[albumIndex]);
    history.push('/details');
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Albums</h1>
      <div className={classes.searchContainer}>
        <input type='text' name='search' value={searchValue} onChange={searchChangeHandler}></input>
        <div className={classes.actions}>
            <button onClick={searchAlbums}>
                Search
            </button>
        </div>
      </div>
      <AlbumList albums={albums} onClick={itemClickHandler} className={classes.hover}/>
    </section>
  );
}

export default AlbumSearchPage;