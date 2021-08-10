import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import AUTH_SERVICE from "../../services/AuthService.js";

const LogIn = (props) => {
  // State to hold credentials on form
  const [credentialsState, setCredentialsState] = useState({
    email: "",
    password: "",
  });

  // State to handle lifecycle changes
  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    isError: false,
    isLoading: false,
  });

  // Function to route users to Signup page
  let handlePushToSignup = () => {
    return props.history.push("/signup");
  };

  // Function to handle Login credentials submission
  let handleSubmit = (event) => {
    event.preventDefault();
    setLifecycleState({ errors: [], isError: false, isLoading: true });
    AUTH_SERVICE.login({
      email: credentialsState.email,
      password: credentialsState.password,
    })
      .then((response) => {
        setLifecycleState({
          ...lifecycleState,
          isLoading: false,
        });
        return props.history.push("/");
      })
      .catch((error) => {
        setLifecycleState({
          errors: error.response.data,
          isError: true,
          isLoading: false,
        });
      });
  };

  //State to show modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log into your account here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="m-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setCredentialsState({
                    ...credentialsState,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setCredentialsState({
                    ...credentialsState,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Don't have an account?
          <Button variant="secondary" onClick={() => handlePushToSignup()}>
            Sign Up
          </Button>
          <Button
            variant="info"
            onClick={handleClose}
            clickAction={handleSubmit}
          >
            Enter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogIn;
