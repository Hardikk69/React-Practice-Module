import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const Nameinputref = useRef();

  const [enteredname, setenteredname] = useState();
  const inputnamechangehandler = (event) => {
    setenteredname(event.target.value);
  };

  const formsubmitehandler = (event) => {
    event.preventDefault();
    if(enteredname.trim() == '')
    {
      return ; 
    }
    console.log(enteredname);
    const enteredvalue = Nameinputref.current.value;

    console.log(enteredvalue);
    Nameinputref.current.value = '';
    // setenteredname(''); 
  };
  return (
    <form onSubmit={formsubmitehandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={Nameinputref}
          type="text"
          id="name"
          onChange={inputnamechangehandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
