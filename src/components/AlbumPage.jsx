import { useParams } from "react-router-dom";
import LinkNavBar from "./LinkNavBar";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAlbumPage } from "../redux/actions";
import { useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "347ef859a8msh40eb9265293372cp1dd2b6jsn8a5bcce294cd",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const AlbumPage = (props) => {
  const params = useParams();
  const albumPage = useSelector((state) => state.albumPage.content);
  const dispatch = useDispatch();

  const albumFetch = async () => {
    const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + params.id, options);

    if (resp.ok) {
      const data = await resp.json();
      dispatch(setAlbumPage(data));
      console.log(data);
    }
  };

  useEffect(() => {
    albumFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <LinkNavBar />
      <Row className="mt-5">
        <Col xs="4">
          <img src={albumPage.cover_medium} alt="" />
          <h5 className="text-white mt-1">{albumPage.title}</h5>
          <h5 className="text-white">{albumPage.artist.name}</h5>
        </Col>
        <Col xs="6">
          {albumPage.tracks.data.map((track) => (
            <div className="d-flex justify-content-between">
              <p className="text-white">{track.title}</p>
              <span className="text-white">{(track.duration / 60).toFixed(2)}</span>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default AlbumPage;
