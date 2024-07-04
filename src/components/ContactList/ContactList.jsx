import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { getContactsList, getSearchValue } from "../../redux/constants";

const ContactList = () => {
  
  const searchValue = useSelector(getSearchValue);
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
              contactId={contact.id}
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
