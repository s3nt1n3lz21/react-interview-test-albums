import classes from './AlbumList.module.css';
import AlbumListItem from './AlbumListItem';

function AlbumList(props) {
  return (
    <ul className={classes.list}>
      {props.albums.map((album) => (
        <AlbumListItem
          key={album.id}
          id={album.id}
          wrapperType={album.wrapperType}
          artistName={album.artistName}
          collectionName={album.collectionName}
          collectionPrice={album.collectionPrice}
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