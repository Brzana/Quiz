function FinishScreen({ points, highScore, dispatch }) {
  const percentage = (points / highScore) * 100;

  function handleOnClick() {
    dispatch({ type: "restart" });
  }

  return (
    <>
      <p className="result">
        You finished the quiz with <strong>{points}</strong> out of {highScore}{" "}
        points ({Math.ceil(percentage)}%).
      </p>
      <button className="btn btn-ui" onClick={handleOnClick}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
