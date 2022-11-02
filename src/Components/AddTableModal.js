import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Stylesheets/AddTableModal.css';


function AddTableModal(props){

    const [title, setTitle] = useState("");

    const [inputFields, setInputFields] = useState([
        { name: '', type: 'int'},
    ]);

    const [table, setTable] = useState([]);

    //This will be called when the submit button is pressed
    function handleSubmit(){
        //Combine data into one table
        const data = {title: title, attributes: inputFields};
        setTable({...table, data});

        //Call back props
        props.valueChangeCallback(data);

        //Reset title
        setTitle("");
        //Reset input fields
        setInputFields([{ name: '', type: 'int' }]);
    }

    //This will be called when the cancel or the X button is pressed
    function handleClose(){
        //Call back props
        props.onHide();
        //Reset title
        setTitle("");
        //Reset input fields
        setInputFields([{ name: '', type: 'int' }]);
    }

    //This will update our fields based on our edits
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index]['name'] = event.target.value;
        setInputFields(data);
    }

    //This will be called on the add field button 
    const addFields = () => {
        let newfield = { name: '', type: 'int' }
        setInputFields([...inputFields, newfield])
    }

    return(
        <Modal  {...props} dialogClassName="custom-modal">
            <Modal.Header closeButton onClick={handleClose}>
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

                {/* This will be for our attributes */}
                <Form>
                    <Form.Label>Attributes</Form.Label>
                    {inputFields.map((input, index) => {
                        return (
                            <>
                                <Row>
                                    <Col className="attribute-name">
                                        <Form.Control className="mb-3" placeholder="Ex: user_id" value={input.name}  onChange={event => handleFormChange(index, event)} />
                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Select Data Type">
                                            <option>int</option>
                                            <option>varchar</option>
                                            <option>more data</option>
                                            <option>more data</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </>
                        );
                    })}
                    <Button variant="primary" className="submit-btn" onClick={addFields}> Add Field </Button>
                </Form>
            </Modal.Body>


            <Modal.Footer>
                <Button variant="secondary" className="cancel-btn" onClick={handleClose} on>
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