import { Component } from "react";
import { v4 as uuidv4, v4 } from "uuid";
class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleInputChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.reset();
    this.addContact();
    console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ this.state", this.state);
  };

  nameInputId = v4();

  reset() {
    this.setState({ contacts: [], name: "" });
  }

  addContact = (text) => {
    console.log("🚀 ~ file: App.js ~ line 36 ~ App ~ text", text);
    const contact = {
      id: v4(),
      name: text,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor={this.nameInputId}>Phonebook </label>
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
          <button type="submit">Add conttact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          <li>{this.state.contacts}</li>
        </ul>
      </div>
    );
  }
}

export default App;
