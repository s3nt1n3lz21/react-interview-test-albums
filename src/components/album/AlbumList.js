import classes from './AlbumList.module.css';
import AlbumListItem from './AlbumListItem';

function AlbumList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <AlbumListItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default AlbumList;