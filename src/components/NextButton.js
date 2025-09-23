function NextButton({ dispatch, answer, index, numOfQuestions }) {
  if (answer === null) {
    return null;
  }

  function handleOnClick() {
    if (index === numOfQuestions - 1) {
      dispatch({ type: "finish" });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  }

  return (
    <button className="btn btn-ui" onClick={handleOnClick}>
      Next
    </button>
  );
}

export default NextButton;
