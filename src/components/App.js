import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Rashmi",
      email: "wgrashmi98@gmail.com",
    },
    {
      id: "2",
      name: "Hasinika",
      email: "hasinikarash98@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
