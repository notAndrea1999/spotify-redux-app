import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Container fluid className="p-0 m-0">
            <Row>
              <Col xs={2} className="p-0">
                <SideBar />
              </Col>
              <Col xs={10} className="p-0" style={{ backgroundColor: "#2E3F57" }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/details/:id" element={<AlbumPage />} />
                  <Route path="/artist/:id" element={<AlbumPage />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
