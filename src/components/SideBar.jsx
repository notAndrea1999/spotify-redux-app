import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo/Spotify_Logo.png";
const SideBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark p-0 m-0 " style={{ height: "100vh" }}>
      <Container className="d-flex flex-column">
        <Navbar.Brand href="#home">
          <img className="mt-3" src={logo} width={"120px"} alt="logo" />
        </Navbar.Brand>

        <Nav.Link className="text-white" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="text-white" href="#link">
          Link
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default SideBar;
