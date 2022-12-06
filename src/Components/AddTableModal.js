import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CloseButton, Container } from "react-bootstrap";
import TableContext from "../Contexts/TableContext";

import './Stylesheets/AddTableModal.css';


function AddTableModal(props) {
    const {setTables} = React.useContext(TableContext); // update the context upon submission

    // This will hold the title of the table
    const [title, setTitle] = useState("");

    // This will hold all of the table attributes 
    const [inputFields, setInputFields] = useState([
        { name: '', type: '' },
    ]);

    // This will hold data for if our form is validated
    const [titleValidated, setTitleValidated] = useState(false);

    // This will hold data for if our form is validated
    const [attributesValidated, setAttributesValidated] = useState(false);

    // Resets all of the table data after submitted or canceled.
    function resetData() { setTitle(""); setInputFields([{ name: '', type: '' }]); }

    // This will be called when the submit button is pressed
    function handleSubmit(e) {
        //Check all 
        checkTitleValidation();
        checkAttributeValidation();

        if(titleValidated === true && attributesValidated === true) {
            const data = { title: title, attributes: inputFields};   // Put data together
            props.valueChangeCallback(data);    // Call back to parent component
            setTables([data]);
            resetData();   // Reset Data
        }
    }
    // This will be called when the cancel or the X button is pressed
    function handleClose() {
        props.onHide();  // Call back to parent component
        resetData(); // Reset Data
    }

    // This will update the name of the attributes
    function handleChange(index, event, type) {
        let data = [...inputFields];    // Get all of the data from array
        data[index][type] = event.target.value;   // Find the correct data and update
        setInputFields(data);   // Set new data 
    }   

    // This will be called on the add field button 
    function addFields() {
        checkAttributeValidation();
        if(attributesValidated === true){
             const newfield = { name: '', type: '' }    // Create a new field
            setInputFields([...inputFields, newfield])  // Add to the array
        }
    }

    function checkTitleValidation(event){
        // Check the validation of the title
        if(title.trim().length !== 0) {
            setTitleValidated(true);
        } 
    }

    function removeField(index){
        let data = [...inputFields];
        const toRemove = data.at(index);
        setInputFields(data => data.filter(obj => {
            return obj !== toRemove;
        }));   // Set new data, filtering out the one we want to remove
    }
    
    function checkAttributeValidation(event){
        // Check the validation of the attributes. We can do this by only looking at the last before adding a new element
        const data = inputFields[inputFields.length - 1];
        if(data['name'].trim().length === 0 || data['type'].length === 0){
            setAttributesValidated(false);
        } else {
            setAttributesValidated(true);
        }
       
    }

    return (
        <Modal  {...props} dialogClassName="custom-modal">
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add a New Table</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Ex: Users" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Form.Control.Feedback type="invalid">You must name your table!</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            This is the title of your table.
                        </Form.Text>
                    </Form.Group>
                

                
                {/* This will be for our attributes */}
                    <Form.Label>Attributes</Form.Label>
                    {inputFields.map((input, index) => {
                        return (
                            <>
                                <Row>
                                    <Col className="attribute-name">
                                        <Form.Control className="mb-3" placeholder="Ex: user_id" value={input.name} onChange={event => handleChange(index, event, 'name')}  />
                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Select Data Type" onChange={event => handleChange(index, event, 'type')} >
                                            <option>Choose a type</option>
                                            <option value="int">int</option>
                                            <option value="varchar">varchar</option>
                                        </Form.Select>
                                    </Col>
                                    {inputFields.length > 1 &&
                                    <Col className="remove-field">
                                        <CloseButton onClick={(e) => removeField(index)}></CloseButton>
                                    </Col>
                                    }
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
                <Button variant="primary" className="submit-btn" onClick={handleSubmit}>
                    Add Table
                </Button>
            </Modal.Footer>
        </Modal>
    );

}


export default AddTableModal;
