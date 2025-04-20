import React from "react";

function ResultPage({ questions, answers, onRetake }) {
  return (
    <div className="container py-4">
      <h3>Result Summary</h3>
      {questions.map((q, index) => {
        const isCorrect = answers[index] === q.answer;
        return (
          <div key={index} className="card my-3">
            <div className="card-body">
              <h5 className="card-title">
                Q{index + 1}: {q.question}
              </h5>
              <p
                className={`card-text ${
                  isCorrect ? "text-success" : "text-danger"
                }`}
              >
                Your Answer: {answers[index] || "Not Answered"}
              </p>
              {!isCorrect && (
                <p className="card-text text-success">
                  Correct Answer: {q.answer}
                </p>
              )}
              <p className="card-text">
                <strong>Explanation:</strong> {q.explanation}
              </p>
            </div>
          </div>
        );
      })}
      <div className="text-end mt-4">
        <button className="btn btn-primary" onClick={onRetake}>
          Retake Test
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
