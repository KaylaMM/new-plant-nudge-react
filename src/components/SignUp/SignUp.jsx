import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SignUp = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick="">
        Sign Up
      </Button>

      <Modal show="" onHide="">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick="">
            Close
          </Button>
          <Button variant="primary" onClick="">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);

export default SignUp;