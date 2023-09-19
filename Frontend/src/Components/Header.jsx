import logo from "../assets/assets/images/logo.svg";
import Navigate from "./Navigate";

function Header() {
  return (
    <div className="flex place-content-between items-center mb-8">
      <img src={logo} alt="Logo" />
      <Navigate />
    </div>
  );
}

export default Header;
