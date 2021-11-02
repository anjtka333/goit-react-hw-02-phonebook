import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contactsFiltered, onClick }) => {
  const filteredList = contactsFiltered();
  return (
    <ul>
      {filteredList.map((item) => {
        const delItem = () => onClick(item.id);
        console.log(item.id);
        return (
          <li key={item.id}>
            {item.name} {item.number}
            <button
              className={s.btn}
              type="button"
              name={item.id}
              onClick={delItem}
            >
              Del
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsFiltered: PropTypes.func,
  onClick: PropTypes.func,
};

export default ContactList;
