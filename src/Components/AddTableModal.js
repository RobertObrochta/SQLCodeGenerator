import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Stylesheets/AddTableModal.css';


function AddTableModal(props){

    return(
        <Modal  {...props} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Add a New Table</Modal.Title>
            </Modal.Header>
            <Modal.Body>Hello! This will where data can be added for a table!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="cancel-btn" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" className="submit-btn" onClick={props.onSubmit}>
                    Add Table
                </Button>
            </Modal.Footer>
        </Modal>
    );

}


export default AddTableModal;