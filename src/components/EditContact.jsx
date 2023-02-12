import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditContact = ({show,setShow,handleShow,bookEdit,setBookEdit, handleSave}) => {
    // console.log(bookEdit);
    const handleClose = () => setShow(false);
    return (
        <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Измените данные</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Control 
         value={bookEdit.Name}
         placeholder='Name'
         onChange={(e)=>{
            setBookEdit((prev)=>{return {...prev , Name: e.target.value}})
         }}
         />

        <Form.Control
         onChange={(e)=>{
            setBookEdit((prev)=>{return {...prev , Surname: e.target.value}})
         }}
         value={bookEdit.Surname}
         placeholder='Surname'
          />
        <Form.Control
         onChange={(e)=>{
            setBookEdit((prev)=>{return {...prev , Number: e.target.value}})
         }}
         value={bookEdit.Number}
         placeholder='Number'
         />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose()
            handleSave(bookEdit)
            }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default EditContact;