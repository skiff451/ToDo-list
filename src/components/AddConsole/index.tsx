import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListItem, sortAll } from "../../redux/actionCreators";

export default function AddConsole() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="add-console">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
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
      </button>
    </div>
  );
}
