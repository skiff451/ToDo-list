import { useDispatch } from "react-redux";
import { removeListItem, toggleDone } from "../../redux/actionCreators";
export default function Item({id, text, date, isDone}: IListItem) {
  
  const dispatch = useDispatch();

  return (
    <div className="item-wrapper">
      <div
        className="item"
        onClick={() => {
          dispatch(toggleDone(id));
        }}
      >
        <p className="text">{text}</p>
        <span className="date">{date}</span>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeListItem(id));
          }}
        >
          <img src="" alt="remove ico" className="remove-ico" />
        </button>
      </div>
    </div>
  );
}
