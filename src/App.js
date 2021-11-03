import { Component } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./App.module.css";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (text) => {
    const { name, number } = text;

    if (
      this.state.contacts.some((item) => {
        console.log(item.name.includes(name));
        return item.name.includes(name);
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: v4(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filter = () => {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filteredContacts;
  };

  delateItem = (id) => {
    return this.setState((prevState) => {
      console.log(prevState);
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList contactsFiltered={this.filter} onClick={this.delateItem} />
      </div>
    );
  }
}

export default App;

//sfc
