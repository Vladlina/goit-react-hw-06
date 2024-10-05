import { MdPerson } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import s from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={s.contactCard}>
      <div className={s.contactFields}>
        <div className={s.contactField}>
          <MdPerson size="24" />
          <p>{contact.name}</p>
        </div>
        <div className={s.contactField}>
          <MdPhone size="24" />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className={s.contactBtn}
      >
        Delete
      </button>
    </div>
  );
}
