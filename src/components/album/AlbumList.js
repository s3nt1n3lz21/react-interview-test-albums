import classes from './AlbumList.module.css';
import AlbumListItem from './AlbumListItem';

function AlbumList(props) {

  return (
    <ul className={classes.list}>
      {props.albums.map((album) => (
        <AlbumListItem
          key={album.trackId}
          id={album.trackId}
          wrapperType={album.wrapperType}
          artistName={album.artistName}
          collectionName={album.collectionName}
          collectionPrice={album.collectionPrice}
          className={props.className}
          onClick={() => props.onClick(album.trackId)}
        //   image={meetup.image}
        //   title={meetup.title}
        //   address={meetup.address}
        //   description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default AlbumList;