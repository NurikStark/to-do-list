import React, { useState } from "react";
import { Link } from "react-router-dom";

type TypeItems = {
  id: string;
  item: string;
};
type TypeTasks = {
  id: string;
  item: string;
};
type PropsTitle = {
  title: String;
  text: string;
  tasks: Array<TypeTasks>;
  items: Array<TypeItems>;
  removeTask: Function;
  readySelectTask: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export function ItemsReady(props: PropsTitle) {
  const [selectTask, setShowInput] = useState<boolean>(false);
  const isDisabled = props.items.length === 0;
  const [buttonClass, setButtonClass] = useState("btn");
  const handleButtonClick = (): void => {
    if (!isDisabled) {
      setShowInput(!selectTask);
    }
  };

  return (
    <div className="board">
      <p className="title">{props.title}</p>
      <div className="block-item_ready">
        <div className="block-item_items" style={{ overflowY: "scroll" }}>
          <Link className="text" to={`/task/${props.tasks}`}>
            {props.text}
          </Link>
          {props.tasks.map((item) => (
            <li className="item" key={item.id}>
              {item.item}
              <button
                className="btn-remove"
                onClick={() => {
                  props.removeTask(item.id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
          <Link className="text" to={`/task/${props.tasks}`}>
            {props.text}
          </Link>
        </div>
      </div>
      <button disabled={isDisabled} className="btn" onClick={handleButtonClick}>
        Add card
      </button>
      {selectTask && (
        <select
          disabled={isDisabled}
          className="select"
          onChange={props.readySelectTask}
        >
          <option className="list-items" value="">
            Select a task
          </option>
          {props.items.map((t) => (
            <option value={t.id}>{t.item}</option>
          ))}
        </select>
      )}
    </div>
  );
}
