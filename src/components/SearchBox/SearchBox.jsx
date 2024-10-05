import s from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
  const id = useId();
  return (
    <div className={s.searchBlock}>
      <label htmlFor={id} className={s.searchTitle}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={s.searchField}
        id={id}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
