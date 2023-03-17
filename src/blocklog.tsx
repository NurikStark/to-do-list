import React, { useState } from "react";
import { Link } from "react-router-dom";

type TypeItems = {
  id: string;
  item: string;
};

type PropsTitle = {
  title: string;
  text: string;
  items: Array<TypeItems>;
  AddItem: (title: string) => void;
};

export function BlockLog(props: PropsTitle) {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Add Card");
  const [inputText, setInputText] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [buttonClass, setButtonClass] = useState<string>("btn");
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setIsActive(!isActive);
    setButtonClass(isActive ? "btn" : "btn_active");
    setShowInput(!showInput);

    if (buttonText === "Add Card") {
      setButtonText("Hide Input");
    } else {
      setButtonText("Add Card");
    }
    setShowButton(!showInput);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      props.AddItem(inputText);
      setInputText("");
    }
  };

  return (
    <div className="board">
      <p className="title">{props.title}</p>
      <div className="block-item">
        <Link className="text" to={`/task/${props.items}`}>
          {props.text}
        </Link>
        {props.items.map((t) => (
          <li className="item" key={t.id}>
            {t.item}
          </li>
        ))}
      </div>
      <div>
        <button className={buttonClass} onClick={handleButtonClick}>
          {buttonText}
        </button>
        {showInput && (
          <input
            className="input-add"
            type="text"
            placeholder="Введите текст"
            value={inputText}
            onChange={(e) => {
              setInputText(e.currentTarget.value);
            }}
          />
        )}
        {showButton && (
          <button className="btn-add" type="button" onClick={handleAddItem}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

