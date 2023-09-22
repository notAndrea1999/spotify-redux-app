import { useParams } from "react-router-dom";
import LinkNavBar from "./LinkNavBar";
import { useDispatch, useSelector } from "react-redux";
import { setArtistPage } from "../redux/actions";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "347ef859a8msh40eb9265293372cp1dd2b6jsn8a5bcce294cd",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const ArtistPage = () => {
  const artistPage = useSelector((state) => state.artistPage.content);
  const dispatch = useDispatch();
  const params = useParams();
  const artistFetch = async () => {
    const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + params.id, options);

    if (resp.ok) {
      const data = await resp.json();
      dispatch(setArtistPage(data));
      console.log(data);
    }
  };

  useEffect(() => {
    artistFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <LinkNavBar />
      <Row>
        <Col xs="12">
          <h1>{artistPage.}</h1>
          <h4></h4>
          <Button>Play</Button>
          <Button>Follow</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistPage;
