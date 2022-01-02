import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import img1 from "../../../images/img10.jpg";
import img2 from "../../../images/img8.jpg";
import img3 from "../../../images/img7.jpg";

const AboutUs = () => {
    return (
      <div>
        <div>
          <div className="bannerBackground d-flex align-items-center justify-content-center">
            <h3>ABOUT US</h3>
          </div>
          <Container className="mt-4">
            <Row>
              <Col xs={12} md={6} lg={6}>
                <h2>OUR MISSION</h2>
                <p className="text-justify">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo nemo enim ipsam.
                </p>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <h2>OUR STORIES</h2>
                <p className="text-justify">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <h2>OUR APPROACH</h2>
                <p className="text-justify">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <h2>OUR PHILOSOPHY</h2>
                <p className="text-justify">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum
                  exercitationem ullam.
                </p>
              </Col>
            </Row>
          </Container>

          <div className="AboutCard container">
            <Row xs={1} md={3} className="g-3">
              <Col>
                <Card>
                  <Card.Img variant="top" height="200px" src={img1} />
                  <Card.Body>
                    <Card.Title>Henry Cavill </Card.Title>
                    <Card.Text>
                     CEO Manager
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" height="200px" src={img2} />
                  <Card.Body>
                    <Card.Title>Nathan Ake</Card.Title>
                    <Card.Text>
                     Creative Director
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" height="200px" src={img3} />
                  <Card.Body>
                    <Card.Title>Emily Radcliffe</Card.Title>
                    <Card.Text>
                      Front end Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
