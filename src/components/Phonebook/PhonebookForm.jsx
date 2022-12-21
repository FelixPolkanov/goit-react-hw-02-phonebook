import React from 'react';
import shortid from 'shortid';
import css from '../Phonebook/phonebook.module.css';
import ContactItem from './Phonebook/ContactItem';


class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };


  nameInputId = shortid.generate();
  numberInputId = shortid.generate();


  handleDataChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmitFunc(this.state);
  
    this.reset();
  };


    


  
    
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.phonebook_form} onSubmit={this.handleOnSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            className={css.phonebook_input}
            value={this.state.name}
            onChange={this.handleDataChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            className={css.phonebook_input}
            value={this.state.number}
            onChange={this.handleDataChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </label>
        <button className={css.phonebook_add_btn}> Add contact </button>
      </form>


    );
  }
}

export default Form;
