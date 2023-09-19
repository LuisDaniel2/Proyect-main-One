import imageMobile from "../assets/assets/images/Tecnico.png";
import imageDesktop from "../assets/assets/images/Tecnico.png";

const MainArticle = () => {
  return (
    <>
      <section className="">
        <picture className="flex py-10 h-[400px] m-[1px] justify-center">
          <source media="(max-width: 640px)" srcSet={imageMobile} />
          <source media="(min-width: 641px)" srcSet={imageDesktop} />
          <img src={imageMobile} alt="Articulo principal img" />
        </picture>

        <div className="sm:flex pb-3">
          <div className="flex-1 py-5 sm:py-5">
            <h2 className="px-1 text-[30px] font-bold sm:text-[40px] leading-none text-Grayishblue">
              ¡Revive tus equipos con<br />los mejores tecnicos de la Web!
            </h2>
          </div>
          <div className="flex-1 py-2 sm:py-9">
            <p className=" text-[13px] mb-10 sm:text-[15px]
             text-Grayishblue font-bold">
              Registrate y pide a los tecnicos certificados de tu localidad, puedes mirar en todos los tecnicos posibles al que se adapte mejor a tu solución, tambien puedes pasarte por el catalogo de productos tecnologicos certificados; ¡pide y te llegará a tu casa!
            </p>
            <button className=" bg-Darkred w-[185px] h-[48px] uppercase text-Offwhite hover:bg-Brown font-bold shadow-lg shadow-Brown " >
              ¡More info¡
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainArticle;
