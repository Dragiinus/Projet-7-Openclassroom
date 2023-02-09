// import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";
import classes from './Gallerie.css';

const Gallery = (props) => {
  if (props.hasError) {
    console.log(props.errorType);
    return <div className={classes.error}>Une erreur est survenue...</div>;
  }

  return (
    <div className={classes.gallery_wrapper}>
      {props.isLoading ? (
        <Spinner />
      ) : (
        props.data.map((housing) => (
          <Card
            key={housing.id}
            cover={housing.cover}
            title={housing.title}
          />
        ))
      )}
    </div>
  );
};

export default Gallery;