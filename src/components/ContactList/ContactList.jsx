import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
