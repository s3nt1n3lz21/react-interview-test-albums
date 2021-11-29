import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAlbums } from '../store/actions';
import AlbumList from '../components/album/AlbumList';
import classes from './AlbumSearchPage.module.css';

function AlbumSearchPage() {

  // Component state
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // App state
  const loadedAlbums = useSelector(state => state.albums);
  function setLoadedAlbums(albums) { dispatch(setAlbums(albums)); }
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
        const albums = [];

        for (const key in data.results) {
          const album = {
            id: key,
            ...data.results[key]
          };

          albums.push(album);
        }

        setIsLoading(false);
        setLoadedAlbums(albums);
    })
  }

  function searchChangeHandler(event) {
    setSearchValue(event.target.value);
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
      <AlbumList albums={loadedAlbums}/>
    </section>
  );
}

export default AlbumSearchPage;