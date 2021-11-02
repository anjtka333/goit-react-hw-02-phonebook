import React, { Component } from "react";
import { v4 as uuidv4, v4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = v4();
  phoneInputId = v4();

  reset() {
    this.setState({ name: "", number: "" });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
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
    );
  }
}

export default ContactForm;
