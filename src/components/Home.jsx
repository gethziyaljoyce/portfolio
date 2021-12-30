import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const Home = ({ darkMode }) => {
  return (
    <div>
      <AttentionSeeker shakeX>
        <Row>
          <Col lg={12} xs={12}>
            <h1 className="display-3 hello" align="center">
              HELLO!<code> I'm Joyce</code>
            </h1>
            <h2 className="lead" align="center">
              I am a Full Stack <h1>MERN</h1> Developer
            </h2>
          </Col>
        </Row>
      </AttentionSeeker>
      <Row>
        <Container align="center">
          <div style={{ height: "45vh" }}>
          </div>
        </Container>
      </Row>
      <br></br>
    </div>
  );
};

export default Home;
