import React, { useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enterednameisvalid = enteredName.trim() !== "";
  const inputIsInvalid = !enterednameisvalid && enteredNameTouched;

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
  event.preventDefault();

  if (!enterednameisvalid) {
    return;
  }

  console.log(enteredName);

  setEnteredName(""); // Clear the enteredName state
  setEnteredNameTouched(false);
};


  const nameInputClass = inputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputNameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {inputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
