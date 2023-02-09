import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import useFetch from "../hooks/useFetch";
import shoreline from "../../assets/images/photos/shoreline.png";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  const { data, hasError, errorType, isLoading } = useFetch("https://dragiinus.github.io/Projet-7-Openclassroom/src/assets/api/logement.json");

  return (
    <>
      <Header />
      <Banner image={shoreline} text={"Chez vous, partout et ailleurs"} />
      <Gallery
        data={data}
        hasError={hasError}
        errorType={errorType}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
};

export default Home;