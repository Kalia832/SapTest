import React from "react";

function QuestionPanel({ question, selected, handleSelect }) {
  return (
    <div>
      <h5>{question.question}</h5>
      <div className="mt-3">
        {question.options.map((opt, idx) => (
          <div className="form-check" key={idx}>
            <input
              className="form-check-input"
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={() => handleSelect(opt)}
              id={`option${idx}`}
            />
            <label className="form-check-label" htmlFor={`option${idx}`}>
              {opt}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionPanel;
