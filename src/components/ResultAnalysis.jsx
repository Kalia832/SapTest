import React from "react";

function ResultAnalysis({
  questions,
  answers,
  username,
  onReview,
  onDownload,
}) {
  const total = questions.length;
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const percentage = ((correct / total) * 100).toFixed(2);

  return (
    <div className="container py-4">
      <h4>Hello, {username} 👋</h4>
      <h5 className="mt-3">Your Performance Summary</h5>
      <ul className="list-group my-3">
        <li className="list-group-item d-flex justify-content-between">
          <span>Total Questions</span> <strong>{total}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Correct Answers</span> <strong>{correct}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Score</span> <strong>{percentage}%</strong>
        </li>
      </ul>

      <div className="d-flex gap-3">
        <button className="btn btn-outline-primary" onClick={onReview}>
          Show Detailed Review
        </button>
        <button className="btn btn-outline-success" onClick={onDownload}>
          Download Certificate
        </button>
      </div>
    </div>
  );
}

export default ResultAnalysis;
