function Progress({ index, numOfQuestions, points, highScore, answer }) {
  return (
    <header className="progress">
      <progress
        className=""
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {highScore} Points
      </p>
    </header>
  );
}

export default Progress;
