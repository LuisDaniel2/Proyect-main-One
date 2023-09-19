import burgerMenu from "../assets/assets/images/icon-menu.svg";

const Navigate = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#">RutaNav</a>
        </li>
        <li>
          <a href="#">RutaNav2</a>
        </li>
        <li>
          <a href="#">RutaNav3</a>
        </li>
        <li>
          <a href="#">RutaNav4</a>
        </li>
      </ul>
      <img
        className="w-8 h-4 cursor-pointer sm:hidden"
        src={burgerMenu}
        alt="Menu desplegable"
      />
    </>
  );
};

export default Navigate;
