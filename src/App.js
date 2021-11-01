import { Component } from "react";
import { v4 as uuidv4, v4 } from "uuid";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.addContact(this.state);
    this.reset();
  };

  nameInputId = v4();
  phoneInputId = v4();
  reset() {
    this.setState({ name: "", number: "" });
  }

  addContact = (text) => {
    const { name, number } = text;
    const contact = {
      id: v4(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filter = () => {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.includes(this.state.filter)
    );
    console.log(filteredContacts);
    return filteredContacts;
    // const { name, number } = text;
    // this.setState(({ contacts }) => ({

    // }));
  };
  render() {
    const contactsFiltered = this.filter();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor={this.nameInputId}>Name </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
          />
          <label htmlFor={this.phoneInputId}>Number </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
            id={this.phoneInputId}
          />
          <button type="submit">Add conttact</button>
        </form>
        <label>
          Find contact by name
          <input
            name="filter"
            value={this.state.filter}
            onChange={this.handleInputChange}
          />
        </label>
        <h1>Contacts</h1>
        <ul>
          {contactsFiltered.map((item) => (
            <li key={item.id}>
              {item.name} {item.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
