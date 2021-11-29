import AlbumListItem from "./AlbumListItem";
import classes from './AlbumDetails.module.css';

function AlbumDetails(props) {

  return (
    <ul className={classes.list}>
        <AlbumListItem
          key={props.album.id}
          id={props.album.id}
          wrapperType={props.album.wrapperType}
          artistName={props.album.artistName}
          collectionName={props.album.collectionName}
          collectionPrice={props.album.collectionPrice}
        />
    </ul>
  );
}

export default AlbumDetails;