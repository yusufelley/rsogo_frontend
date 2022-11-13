import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./About.css";

function About(props) {
  const [rsoName, setRsoName] = useState(props.rsoName);

  const [body, setBody] = useState(props.body);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="about-div">
      <Button
        style={{ marginLeft: "5rem" }}
        className="about-btn"
        variant="dark"
        onClick={handleShow}
      >
        About
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{rsoName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </div>
  );
}

export default About;
