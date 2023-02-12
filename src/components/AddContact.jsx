import React, { useState } from 'react';

const AddContact = ({handleContact}) => {
    const [name,setName]= useState("")
    const [surname, setSurName]= useState("")
    const [number, setNumber]= useState("")
   
function handleAdd() {

    let obj = {
        Name: name,
        Surname: surname,
        Number: number,
        id: Date.now()
    }
    
    handleContact(obj)
    setName("")
    setSurName("")
    setNumber("")
}

    return (
        <div >
            <div style={{display: "flex",justifyContent: 'center', marginTop: "100px" }}>
            <input onChange={(e)=>setName(e.target.value)} className='inp-name' type="text" placeholder='Name' />
            <input onChange={(e)=>setSurName(e.target.value)} type="text" placeholder='Surname'/>
            <input onChange={(e)=>setNumber(e.target.value)}  placeholder='Number'/>
            <button onClick={handleAdd}>Send</button>
            </div>
            
        </div>
    );
};

export default AddContact;