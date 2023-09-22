import { useParams } from "react-router-dom";
import LinkNavBar from "./LinkNavBar";
import { useDispatch, useSelector } from "react-redux";
import { setAlbum, setAlbumPage, setArtistPage } from "../redux/actions";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
  const home = useSelector((state) => state.home.content);

  const dispatch = useDispatch();
  const params = useParams();

  const artistFetch = async () => {
    const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + params.id, options);

    if (resp.ok) {
      const data = await resp.json();
      dispatch(setArtistPage(data));
      //   console.log(data);
    }
  };

  const handleArtist = async (artistName) => {
    try {
      let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistPage.name, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "347ef859a8msh40eb9265293372cp1dd2b6jsn8a5bcce294cd",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }); // gets the information
      if (response.ok) {
        let data = await response.json();
        let result = await data.data;
        console.log(result);
        dispatch(setAlbum(result));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    artistFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <LinkNavBar />
        <Row>
          <Col xs="12" className="mt-5">
            <h1 className="text-white">{artistPage.name}</h1>
            <p className="text-white">{artistPage.nb_fan} FOLLOWERS</p>
            <Button variant="success" className="text-white rounded-pill border-white " style={{ width: "120px" }}>
              Play
            </Button>
            <Button variant="dark" className="text-white rounded-pill border-white " style={{ width: "120px" }}>
              Follow
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        {/* <Row>
          <h2 className="text-start">Tracks</h2>
          {home.map((singleAlbum, i) => (
            <Col key={i} xs="6" md="3" lg="4">
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className="text-truncate">{singleAlbum.title_short}</Card.Title>
                  <Card.Title></Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    </>
  );
};

export default ArtistPage;
