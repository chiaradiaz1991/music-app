// store
import { connect } from "react-redux";
import { deleteFavourite } from "../../store";

const Favourites = (props) => {
  const handleDeleteFav = (id, artist) => {
    const { dispatch } = props;
    dispatch(deleteFavourite(id, artist));
  };
  return (
    <div className="favouriteContainer">
      <h3 className="favouriteTitle">Favourite Artists</h3>
      {props.favArtists.map((fav) => {
        return (
          <div
            key={`${fav.id}-favourite`}
            className="favouriteArtist"
            onClick={() => handleDeleteFav(fav.id, fav.artist)}
          >
            {fav.name}
          </div>
        );
      })}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    favArtists: state.favArtists,
  };
}

export default connect(mapStateToProps)(Favourites);
