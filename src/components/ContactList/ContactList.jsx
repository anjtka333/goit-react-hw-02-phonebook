const ContactList = ({ contactsFiltered, onClick }) => {
  const filteredList = contactsFiltered();
  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          {item.name} {item.number}
          <button type="button" name={item.id} onClick={onClick}>
            Del
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
