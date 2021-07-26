import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const PlantCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Pathos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Living Room</ListGroupItem>
        <ListGroupItem>Twice a week</ListGroupItem>
        <ListGroupItem>Tuesday 7/21</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Progress Album</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default PlantCard;
