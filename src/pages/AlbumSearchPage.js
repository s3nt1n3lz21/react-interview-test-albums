import { useState, useEffect } from 'react';
import AlbumList from '../components/album/AlbumList';
import classes from './AlbumSearchPage.module.css';

function AlbumSearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedAlbums, setLoadedAlbums] = useState([]);

  function searchAlbums(searchText) {
    fetch(
        'https://itunes.apple.com/search?term=' + searchText,
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
        <input></input>
        <div className={classes.actions}>
            <button onClick={searchAlbums}>
                Search
            </button>
        </div>
      </div>
      <AlbumList albums={loadedAlbums} />
    </section>
  );
}

export default AlbumSearchPage;