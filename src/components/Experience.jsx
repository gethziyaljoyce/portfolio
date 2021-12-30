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
                                  An App which will help us to store our beautiful memories with title,tags and picture,
                                  And we can record the creator of that post as well..We can edit,update and delete..
                                  And we can count the likes.
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
                                  An application that helps the customers to sign up for the wait list.
                                  By sharing the link given with others..and If they registered with that link,
                                  the position of the customer will be improved.
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
                                  A chat application with socket.io.. By copying and sharing the ID.. We can connect with our friends
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
                                  An E-Shopping application.. We can choose products and can filter based on color,size and price.
                                  payment will be made by stripe..
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
