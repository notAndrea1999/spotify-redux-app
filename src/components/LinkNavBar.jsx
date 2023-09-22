import { Container, Nav, Navbar } from "react-bootstrap";

const LinkNavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Nav className="d-flex mx-auto">
          <Nav.Link>Trending</Nav.Link>
          <Nav.Link>Podcast</Nav.Link>
          <Nav.Link>Mood and Genres</Nav.Link>
          <Nav.Link>New Releases</Nav.Link>
          <Nav.Link>Discover</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default LinkNavBar;
