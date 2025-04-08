import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I got hooked on programming the moment I realized I could build things that think, scale, and solve real problems. 🤖☁️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java and TypeScript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">Intelligent Web Applications and Scalable Backend Systems </b> and
                also in areas related to{" "}
                <b className="purple">
                Cloud Computing and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">React</b> and
              <i>
                <b className="purple">
                  {" "}
                  Node.js
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> full-stack platforms powered by modern APIs and smart data flows</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/atharvabiyani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atharva-biyani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            {/* Contact info below social icons */}
            <div className="home-about-contact" style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ color: "white", fontSize: "18px", marginBottom: "5px" }}>
              <span role="img" aria-label="email">📧</span>{" "}
              <a
                href="mailto:atharva.biyani@gmail.com"
                style={{ color: "#c084f5", textDecoration: "none", fontWeight: "500" }}
              >
              atharva.biyani@gmail.com
              </a>
              </p>
              <p style={{ color: "white", fontSize: "18px" }}>
              <span role="img" aria-label="phone">📱</span>{" "}
              <span style={{ color: "#c084f5", fontWeight: "500" }}>(832) 474-5708</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
