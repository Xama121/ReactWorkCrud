import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/AddContact.jsx";
import AddContactList from "./components/AddContactList";

const App = () => {
  const [book, setBook] = useState([]);
  const [bookEdit, setBookEdit] = useState({});
  function handleContact(obj) {
    let newBook = [...book];
    newBook.push(obj);
    setBook(newBook);
  }

  function deleteContact(id) {
    let newBook = book.filter((item) => {
      return item.id !== id;
    });
    setBook(newBook);
  }
  function handleEdit(index) {
    setBookEdit(book[index]);
  }
  function handleSave(newBook) {
    let newContact = book.map((item) => {
      if (item.id == newBook.id) {
        return newBook;
      }
      return item;
    });
    setBook(newContact);
    // console.log(newContact);
    // book.push(newBook)
    // book.splice(newBook.id , 2 )
  }
  return (
    <div>
      <AddContact handleContact={handleContact} />
      <AddContactList
        book={book}
        deleteContact={deleteContact}
        bookEdit={bookEdit}
        setBookEdit={setBookEdit}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;
