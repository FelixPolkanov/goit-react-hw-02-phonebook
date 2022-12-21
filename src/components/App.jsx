import React from 'react';
import css from './Phonebook/phonebook.module.css';
import Form from './Phonebook/PhonebookForm';

export class App extends React.Component {
  state = {
    contacts: [],
    
  };
  formSubmitHandler = data => {
   console.log(data)
 }
  


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <>
          <div className={css.phonebook}>
            <h1 className={css.phonebook_title}>Phonebook</h1>
            <Form onSubmitFunc={ this.formSubmitHandler } />
            
            <h2 className={css.contacts_title}>Contacts</h2>
          </div>
        </>
      </div>
    );
  }
}
