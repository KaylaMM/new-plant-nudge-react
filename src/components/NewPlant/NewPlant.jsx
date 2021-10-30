import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import axios from "axios";

const NewPlant = (plant) => {
  //not destructuring correctly
  const { type, location, water, lastWatering } = plant;

  const [show, setShow] = useState(false);
  const [plantType, setPlantType] = useState("");
  const [plantLocation, setPlantLocation] = useState("");
  const [waterNeeded, setWaterNeeded] = useState("");
  const [lastWater, setLastWater] = useState("");

  //incomplete
  const postData = () => {
    axios.post(`http://localhost:3001`, {
      plantType,
      plantLocation,
      waterNeeded,
      lastWater,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Add Plant
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Plant: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="m-3" controlId="formBasicPlantType">
              <Form.Label>What</Form.Label>
              <Form.Control
                type="plant-type"
                placeholder="i.e. Pathos"
                onChange={(e) => setPlantType(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPlantLocation">
              <Form.Label>Where</Form.Label>
              <Form.Control
                type="location"
                placeholder="i.e. Living Room"
                onChange={(e) => setPlantLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPlantWater">
              <Form.Label>When</Form.Label>
              <Form.Control
                type="plant-water"
                placeholder="i.e. Once a week"
                onChange={(e) => setWaterNeeded(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicLastWatering">
              <Form.Label>Next</Form.Label>
              <Form.Control
                type="last-watering"
                placeholder="i.e. Tuesday 7/21"
                onChange={(e) => setLastWater(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={postData} type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewPlant;
