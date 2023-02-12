import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import EditContact from './EditContact';

const AddContactList = ({book,deleteContact, bookEdit,setBookEdit,handleEdit,handleSave}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);


    // console.log(book);

    


   
    return (
        <div style={{marginTop: "100px"}}>
            <Table>
      <thead>
      

     
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>Surname</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
      { book?.map((item,index)=>(
        <tr key={index}>
          <td>1</td>
          <td>{item.Name} <button onClick={()=>{
            handleShow()
            handleEdit(index)
          }}>Edit</button> <button onClick={()=>deleteContact(item.id)}>Delete</button></td>
          <td>{item.Surname}<button onClick={()=>{
            handleShow()
            handleEdit(index)
          }}>Edit</button> <button onClick={()=>deleteContact(item.id)}>Delete</button></td>
          <td>{item.Number}<button onClick={()=>{
            handleShow()
            handleEdit(index)
          }}>Edit</button> <button onClick={()=>deleteContact(item.id)}>Delete</button></td>
        </tr>
        ))}
      </tbody>
    </Table>
        <EditContact show = {show} setShow= {setShow} handleShow= {handleShow} bookEdit={bookEdit} setBookEdit = {setBookEdit} handleSave= {handleSave}/>
        </div>
    );
};

export default AddContactList;