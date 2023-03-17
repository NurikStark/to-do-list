import React, { useState } from "react";
import { Link } from "react-router-dom";

type TypeProgress = {
  id: string;
  item: string;
};
type TypeFinished= {
  id: string;
  item: string;
};
type PropsTitle = {
  title: string;
  text: string;
  progress: Array<TypeProgress>;
  finished: Array<TypeFinished>;
  finishedSelectTask: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Finished(props: PropsTitle) {
  const [showInput, setShowInput] = useState<boolean>(false);
  const isDisabled = props.progress.length === 0;
  const handleButtonClick = (): void => {
    if (!isDisabled) {
      setShowInput(!showInput);
    }
  };
  return (
    <div className="board">
      <p className="title">{props.title}</p>
      <div className="block-item">
          <Link className="text" to={`/task/${props.finished}`}>
            {props.text}
          </Link>
          {props.finished.map((item) => (
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
          onChange={props.finishedSelectTask}
        >
          <option value="">Select a task</option>
          {props.progress.map((t) => (
            <option value={t.id} className="item">
              {t.item}
            </option>
          ))}
        </select>
      )}
      </div>
  );
}