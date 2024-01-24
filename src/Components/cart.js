import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CartOverlay({ show, onClose, value }) {
    let [amount1,amount2,amount3]=value
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Total items:{amount1+amount2+amount3}</h1>
        {amount1 > 0 && <span>Matar Paneer: {amount1}</span>}<br/>
        {amount2 > 0 && <span>Kadai Paneer: {amount2}</span>}<br/>
        {amount3 > 0 && <span>Shahi Paneer: {amount3}</span>}<br/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

