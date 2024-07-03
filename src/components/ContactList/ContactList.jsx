import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { getContactsList, getSearchValue } from "../../redux/constants";

const ContactList = () => {
  const dispatchDelete = useDispatch();
  const searchValue = useSelector(getSearchValue);

  const handleDelete = (contactID) => {
    dispatchDelete(deleteContact(contactID));
  };

  const contactsList = useSelector(getContactsList);

  const filteredList = contactsList.filter((contact) => {
    if (!searchValue) {
      return contactsList;
    }
    return contact.name
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  return (
    <ul>
      {filteredList.map((contact) => {
        return (
          <li key={contact.id} className={css.listCard}>
            <Contact
              handleDelete={() => {
                handleDelete(contact.id);
              }}
              contactName={contact.name}
              contactPhone={contact.number}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
