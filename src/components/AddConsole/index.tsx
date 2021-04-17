import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListItem } from "../../redux/actionCreators";
import "./index.scss";
export default function AddConsole() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="add-console">
      <input
        className="add-input"
        type="text"
        value={value}
        placeholder="write your to-do"
        onChange={(e) => setValue(e.target.value)}
      />
      <span
        className="add-btn"
        onClick={() => {
          if (value.trim() !== "") {
            dispatch(addListItem(value));
            setValue("");
          } else {
            console.log("empty value");
          }
        }}
      >
        add
      </span>
    </div>
  );
}
