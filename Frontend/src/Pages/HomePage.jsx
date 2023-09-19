import NavBar from "../Components/NavBar.jsx";
import { Link } from "react-router-dom";
import MainArticle from "../Components/MainArticle.jsx"
import Header from "../Components/Header.jsx"
import TecContainter from "../Components/TecContainer.jsx"

import CardsContainer from "../Components/CardsContainer.jsx";

function HomePage() {
  return (
    <>
        <NavBar />
      <div className="sm:flex sm:gap-8">
        {" "}
        <MainArticle />
        <TecContainter />
        

        {/* <button>
          <Link to="/techRegister"> Registro Tecnico </Link>
        </button> */}

      </div>
      <CardsContainer />


    </>
  );
};

export default HomePage;