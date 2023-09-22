import { Container, Nav } from "react-bootstrap";

const LinkNavBar = () => {
  return (
    <Container className=" mt-3">
      <Nav className="d-flex justify-content-around decoration-none">
        <Nav.Link className=" text-light">Trending</Nav.Link>
        <Nav.Link className=" text-light">Podcast</Nav.Link>
        <Nav.Link className=" text-light">Mood and Genres</Nav.Link>
        <Nav.Link className=" text-light">New Releases</Nav.Link>
        <Nav.Link className=" text-light">Discover</Nav.Link>
      </Nav>
    </Container>
  );
};

export default LinkNavBar;
