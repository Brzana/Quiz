import { useReducer } from "react";

const initialValue = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload };
    case "dec":
      return { ...state, count: state.count + action.payload };
    case "reset":
      return initialValue;
    case "defineCount":
      return { ...state, count: action.payload };
    case "defineStep":
      return { ...state, step: action.payload };
    default:
      throw new Error("Unkown action type");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({ type: "dec", payload: -state.step });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "inc", payload: state.step });
  };

  const defineCount = function (e) {
    dispatch({ type: "define", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    //setStep(Number(e.target.value));
    dispatch({ type: "defineStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
