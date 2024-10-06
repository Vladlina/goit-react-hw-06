import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

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
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
