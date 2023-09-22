import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AlbumList = (props) => {
  const homeAlbum = useSelector((state) => state.home.content);
  // console.log(homeAlbum);
  let slicedAlbum;
  if (props.title === "Rock Classic") {
    slicedAlbum = homeAlbum.slice(0, 4);
    console.log(slicedAlbum);
  } else if (props.title === "Pop Culture") {
    slicedAlbum = homeAlbum.slice(4, 8);
  } else if (props.title === "Hip Hop") {
    slicedAlbum = homeAlbum.slice(8, 12);
  }

  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="mt-3 text-white text-start">{props.title}</h2>
      <Row>
        {slicedAlbum.map((album) => (
          <Col xs="3" key={`id-${album.id}`}>
            <Card className="text-white" style={{ backgroundColor: "#2E3F57" }}>
              <Card.Img
                variant="top"
                src={album.album.cover_medium}
                onClick={() => navigate("/details/" + album.album.id)}
              />
              <Card.Body>
                <Card.Title className="text-truncate text-start">{album.album.title}</Card.Title>
                <Link to={"/artist/" + album.artist.id} style={{ textDecoration: "none" }} className="text-white">
                  <Card.Title className="text-truncate text-start">{album.artist.name}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumList;
