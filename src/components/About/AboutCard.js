import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I'm <span className="purple">Atharva Biyani </span>
            from <span className="purple"> Houston, Texas.</span>
            <br />
            <br />
            I am a senior computer science student at The University of Texas at Dallas with experience in various tech domains. I would consider myself a "generalist" but with a focus in data and fullstack development.
            <br />
            <br />
            I'm passionate about building efficient, user-focused software solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Side Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying Active
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “In the middle of every difficulty lies opportunity.”{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
