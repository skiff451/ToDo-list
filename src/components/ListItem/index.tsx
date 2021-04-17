import classNames from "classnames";
import { useDispatch } from "react-redux";
import { removeListItem, toggleDone } from "../../redux/actionCreators";
import "./index.scss";
import bin from "./remove.svg";

export default function Item({ id, text, date, isDone }: IListItem) {
  const dispatch = useDispatch();
  
  const doneStyles = classNames("item", { done: isDone });
  
  return (
    <div
      className={doneStyles}
      onClick={() => {
        dispatch(toggleDone(id));
      }}
    >
      <div className="text-wrapper">
        <span className="date">{date}</span>
        <div className="text">{text}</div>
      </div>

      <span
        className="remove-btn"
        onClick={() => {
          dispatch(removeListItem(id));
        }}
      >
        <img src={bin} alt="remove ico" className="remove-ico" />
      </span>
    </div>
  );
}
