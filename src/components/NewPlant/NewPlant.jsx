import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewPlant = () => {
  const [show, setShow] = useState(false);

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
          <div className="new-plant">
            <form>
              <label className="new-plant-info">
                Plant Type:
                <input type="text" name="plant-type" />
              </label>

              <label className="new-plant-info">
                Location:
                <input type="text" name="plant-location" />
              </label>

              <label className="new-plant-info">
                Water Needed:
                <input type="text" name="plant-water" />
              </label>

              <label className="new-plant-info">
                Next Watering:
                <input type="text" name="plant-water-next" />
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewPlant;
