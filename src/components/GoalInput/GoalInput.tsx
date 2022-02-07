//@ts-nocheck
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./GoalInput.css";
import Button from "../Button/Button";

type PropsType = {
  newGoalHandler: (value: string) => void;
};

const GoalInput = (props: PropsType) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  function changeInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function formSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inputValue.trim()) {
    //   alert('empty');
      setError(true);
      setTimeout(()=> {setError(false)}, 1000)
    } else {
      props.newGoalHandler(inputValue);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="goal_input">
        {error && <span>try add smth</span>}
        <input type="text" onChange={changeInputValue} value={inputValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
