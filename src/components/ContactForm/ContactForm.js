import {
  ContactFormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import { useContactsContext } from '../Context/Context';

export const ContactForm = () => {
  const { handleSubmit, name, handleNameChange, number, handleNumberChange } =
    useContactsContext();
  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <FormLabel htmlFor="nameInput">Name</FormLabel>
      <FormInput
        id="nameInput"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
      <FormLabel htmlFor="numberInput">Number</FormLabel>
      <FormInput
        id="numberInput"
        type="tel"
        name="number"
        pattern="[0-9]*"
        //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <FormButton type="submit">Add contact</FormButton>
    </ContactFormContainer>
  );
};

// export const ContactForm = ({ name, number, onNameChange, onNumberChange, onSubmit }) => (
//   <form onSubmit={onSubmit}>
//     <input
//       type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
//     //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//       value={name}
//       onChange={onNameChange}
//         />
//          <input
//       type="tel"
//             name="number"
//             pattern="[0-9]*"
//     //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//       value={number}
//       onChange={onNumberChange}
//         />
//     <button type="submit">Add contact</button>
//   </form>
// );

// ContactForm.propTypes = {
// name: PropTypes.string.isRequired,
// number: PropTypes.string.isRequired,
// onNameChange: PropTypes.func.isRequired,
// onNumberChange: PropTypes.func.isRequired,
// onSubmit: PropTypes.func.isRequired,
// };
