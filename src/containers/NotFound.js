import classes from '../styles/containers/NotFound.module.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <>
      <Header />
      <div className={ classes.not_found_wrapper }>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </>

  );
}

export default NotFound;