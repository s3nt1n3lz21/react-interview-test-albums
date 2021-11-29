import Card from '../ui/Card';
import classes from './AlbumListItem.module.css';

function AlbumListItem(props) {

  return (
    <li className={classes.item}>
      <Card>
        <div className={[classes.content, props.className].join(' ')} onClick={props.onClick}>
          <h3>{props.wrapperType}</h3>
          <p>{props.artistName}</p>
          <p>{props.collectionName}</p>
          <p>{props.collectionPrice}</p>
        </div>
        {/* <div className={classes.actions}>
          <button onClick={moreDetailsHandler}>
            More Details
          </button>
        </div> */}
      </Card>
    </li>
  );
}

export default AlbumListItem;