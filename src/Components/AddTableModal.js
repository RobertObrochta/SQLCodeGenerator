import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './Stylesheets/AddTableModal.css';


function AddTableModal(props){

    const [title, setTitle] = useState("");

    function handleSubmit(){
        props.valueChangeCallback(title);
        setTitle("");
    }

    return(
        title,
        <Modal  {...props} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Add a New Table</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3"> 
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Ex: Users" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Form.Text className="text-muted">
                            This is the title of your table.
                        </Form.Text>
                    </Form.Group>
                </Form>

            </Modal.Body>


            <Modal.Footer>
                <Button variant="secondary" className="cancel-btn" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" className="submit-btn" onClick={() => handleSubmit()}>
                    Add Table
                </Button>
            </Modal.Footer>
        </Modal>
    );

}


export default AddTableModal;