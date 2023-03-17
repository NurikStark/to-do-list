import React, { useState } from "react";
import { Link } from "react-router-dom";

type TypeTasks = {
  id: string;
  item: string;
};
type TypeProgress = {
  id: string;
  item: string;
};
type PropsTitle = {
  title: string;
  text: string;
  tasks: Array<TypeTasks>;
  progress: Array<TypeProgress>;
  inProgressSelectTask: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function InProgress(props: PropsTitle) {
  const [showInput, setShowInput] = useState<boolean>(false);
  const isDisabled = props.tasks.length === 0;
  const handleButtonClick = (): void => {
    if (!isDisabled) {
      setShowInput(!showInput);
    }
  };
  return (
    <div className="board">
      <p className="title">{props.title}</p>
      <div className="block-item">
          <Link className="text" to={`/task/${props.progress}`}>
            {props.text}
          </Link>
          {props.progress.map((item) => (
          <li className="item" key={item.id}>
            {item.item}
          </li>))}
      </div>
          <button disabled={isDisabled} className="btn" onClick={handleButtonClick}>
        Add card
      </button>
      {showInput && (
        <select
          disabled={isDisabled}
          className="select"
          onChange={props.inProgressSelectTask}
        >
          <option value="">Select a task</option>
          {props.tasks.map((t) => (
            <option value={t.id} className="item">
              {t.item}
            </option>
          ))}
        </select>
      )}
      </div>
  );
}
