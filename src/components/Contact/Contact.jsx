import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contactName, contactPhone, contactId }) => {
  const dispatchDelete = useDispatch();
  const handleDelete = () => {
    dispatchDelete(deleteContact(contactId));
  };

  return (
    <>
      <div>
        <div>{contactName}</div>
        <div>{contactPhone}</div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Contact;
