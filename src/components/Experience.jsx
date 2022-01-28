import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import memories from "../media/memories.PNG";
import referal from "../media/referal-link.PNG";
import chat from "../media/video-chat-app.PNG";
import ecommerce from "../media/ecommerce.PNG";
import wp from "../media/wpc.PNG";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <div className="main_con">
            <Zoom>
              <Row>
                <div className="last">

                  <Col lg={4} sm={12} md={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div className="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={memories}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Memories Application
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  A memories Application: Featuring, Adding image with title and tags.
                                  Allowed edit and delete operations,images are stored as a base64 format in the database.
                                  User can add their images with tag and title as like social media timeline.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://joyce-memories-app.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/gethziyaljoyce/memories-client.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/gethziyaljoyce/memories-server.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12} md={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div className="flip-card">
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={referal}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Wait List Application
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  The customer waiting list management application: 
                                  If a customer register for the product which is not available in the stock,the waiting position of the customer will
                                  displayed after the registration and then the link will be auto generated to share with their friends to register that product.If that shared
                                  link is used for the registration the waiting position of the customer will be reduced.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://joyce-referal-url.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/gethziyaljoyce/referal-url-client.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/gethziyaljoyce/referal-url.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12} md={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={chat}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Video Chat Application
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  A video chat application:Featuring,Generate meeting Id,Share meeting Id,
                                  Make connection by meeting Id,Accept/Reject the call and end meeting. It is
                                  an one to one video chat application. User can generate the meeting Id to 
                                  connect with his/her friend.The user can join the meeting with shared meeting Id.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://joyce-zoom-clone.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/gethziyaljoyce/zoom-clone-frontend.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/gethziyaljoyce/zoom-clone-backend.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>
                </div>
              </Row>
            </Zoom>
            <br></br>

            <Zoom>
              <Row>
                <div className="last">
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div className="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={ecommerce}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                E-Commerce Application
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  An E-Shopping application: Featuring,user registration,
                                  user login,product filter based on color size and prize. Add to cart,checkout the items
                                  and payment process.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://joyce-e-commerce.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/gethziyaljoyce/e-commerce-client.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/gethziyaljoyce/e-commerce-server.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={wp}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                WhatsApp Clone
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  WhatsApp Clone using React js..
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </center>
                      <br></br>

                      <div>
                        <a
                          href="https://joyce-whatsapp-clone.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/gethziyaljoyce/whatsapp-clone.git"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Github Repo
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                </div>
              </Row>
            </Zoom>
          </div>
        </Container>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Experience;
