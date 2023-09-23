import {
  ListItem,
  ListItemWrapper,
  ListItemInfo,
  ListItemButton,
} from './ContactListItem.styled';
import { useContactsContext } from '../Context/Context';

export const ContactListItem = () => {
  const { filteredContacts, deleteContact } = useContactsContext();
  return filteredContacts.map(contact => (
    <ListItem key={contact.id}>
      <ListItemWrapper>
        <ListItemInfo>
          {contact.name}: {contact.number}
        </ListItemInfo>
        <ListItemButton onClick={() => deleteContact(contact.id)}>
          Delete
        </ListItemButton>
      </ListItemWrapper>
    </ListItem>
  ));
};

// import PropTypes from 'prop-types';
// import {
//   ListItem,
//   ListItemWrapper,
//   ListItemInfo,
//   ListItemButton,
// } from './ContactListItem.styled';

// export const ContactListItem = ({ name, number, onDeleteContact }) => (
//   <ListItem>
//     <ListItemWrapper>
//       <ListItemInfo>
//         {name}: {number}
//       </ListItemInfo>
//       <ListItemButton onClick={onDeleteContact}>Delete</ListItemButton>
//     </ListItemWrapper>
//   </ListItem>
// );

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
