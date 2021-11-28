import AlbumListItem from "./AlbumListItem";

function AlbumDetails(props) {
  const album = '';

  return (
    <div>
        <AlbumListItem
          key={album.id}
          id={album.id}
          wrapperType={album.wrapperType}
          artistName={album.artistName}
          collectionName={album.collectionName}
          collectionPrice={album.collectionPrice}
        />
    </div>
  );
}

export default AlbumDetails;