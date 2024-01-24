import logo from "../../images/logo.svg";
import { Img, InputSpace, Nav, Button } from "./NavbarStyled";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Img src={logo} alt="Logo Ipsum" />

        <InputSpace className="input-search-space">
          <input type="text"></input>
          <i className="bi bi-search"></i>
        </InputSpace>

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
