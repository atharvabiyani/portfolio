import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ArticleCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{}}>
              {props.description}
            </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <CgWebsite /> &nbsp; Read Article
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
