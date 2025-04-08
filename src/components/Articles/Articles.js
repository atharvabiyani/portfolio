import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import Particle from "../Particle";
import smart from "../../Assets/smart.png";
import product from "../../Assets/product.png";
import networking from "../../Assets/networking.png";

function Articles() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Articles</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few posts I've written to explore ideas and share knowledge.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ArticleCard
              imgPath={smart}
              title="Microsoft Azure for Smart Cities: IoT and Edge Computing in Action"
              description="This article explores how smart cities are leveraging Microsoft Azure's IoT and Edge Computing to solve urban challenges like traffic, energy use, and public safety. It highlights real-world applications of Azure’s cloud-powered infrastructure to enable real-time decision-making and sustainable city development. A must-read for anyone curious about the future of urban tech."
              link="https://medium.com/@atharvabiyani/microsoft-azure-for-smart-cities-iot-and-edge-computing-in-action-35fb4914b195"
            />
          </Col>

          <Col md={4} className="project-card">
            <ArticleCard
              imgPath={networking}
              title="The Power of Networking: Why It’s Crucial in Today’s Competitive Job Market"
              description="This article breaks down why networking is crucial in today’s job market and how genuine connections can unlock hidden opportunities that aren’t listed on job boards. It explores the real value of referrals and how they can fast-track your hiring chances. The article also shares actionable strategies for using LinkedIn to build your professional presence."
              link="https://medium.com/@atharvabiyani/the-power-of-networking-why-its-crucial-in-today-s-competitive-job-market-f5be9d95cf35"
            />
          </Col>

          <Col md={4} className="project-card">
            <ArticleCard
              imgPath={product}
              title="My Journey into Learning Product Management and Its Crucial Role in Tech Companies"
              description={`This article reflects on my journey into product management, exploring how coursework and hands-on experience have shaped my understanding of this vital tech role. It highlights key concepts like Agile, roadmapping, KPIs, and A/B testing, and explains why product managers are critical to building successful, user-focused products.`}
              link="https://medium.com/@atharvabiyani/my-journey-into-learning-product-management-and-its-crucial-role-in-tech-companies-a8f68ff161ea"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;
