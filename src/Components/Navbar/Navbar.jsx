import logo from "../../images/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="Logo Ipsum" />

        <div className="input-search-space">
          <input type="text"></input>
          <i className="bi bi-search"></i>
        </div>

        <button>
          Entrar
          <span></span>
        </button>
      </nav>
    </>
  );
}
