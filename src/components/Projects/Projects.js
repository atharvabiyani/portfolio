import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IMDB Sentiment Analysis"
              description="Sentiment analysis project using IMDB reviews, comparing the performance of XGBoost, LightGBM, and BERT models. Trained on Google Colab using the IMDB dataset with preprocessing and vectorization. Key visuals include confusion matrices, ROC curves, and training loss graphs. The project evaluates accuracy, F1 score, and AUC to determine the best model for movie sentiment classification."
              ghLink="https://github.com/atharvabiyani/Sentiment-Analysis-For-Movie-Reviews"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NBA Highlights Classifier"
              description="AI model for classifying NBA highlights based on player movements in video clips. Combines YOLOv5 for player detection, MoveNet for pose estimation, and a Random Forest Classifier for final prediction. Data was scraped using Selenium, processed with OpenCV and Pandas, and built in Python using Jupyter and Azure. Developed as a team project with the AI Society at UTD."
              ghLink="https://github.com/atharvabiyani/Machine-Learning-Basketball-Highlight-Classifier-Model-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Full Stack Moview Reviews Application"
              description="A movie review web app built with Java, Spring Boot, MongoDB, and React. Users can browse a dynamic movie database, watch trailers, and leave reviews. Features a clean frontend UI, RESTful backend, and seamless user interaction. Designed to demonstrate full-stack integration and database handling with real-time review functionality."
              ghLink="https://github.com/atharvabiyani/Movie-Review-Application-Java-SpringBoot-MongoDB-React"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
