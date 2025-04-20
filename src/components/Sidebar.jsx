import React from "react";

function Sidebar({ questions, current, answers, goToQuestion }) {
  return (
    <div className="p-3">
      <h5 className="mb-3">Questions</h5>
      <div className="d-flex flex-wrap gap-2">
        {questions.map((_, index) => {
          const isAnswered = answers.hasOwnProperty(index);
          const isActive = current === index;

          let btnClass = "btn btn-outline-secondary";
          if (isAnswered) btnClass = "btn btn-success";
          if (isActive) btnClass = "btn btn-primary";

          return (
            <button
              key={index}
              className={`${btnClass} rounded-circle`}
              style={{ width: "48px", height: "48px" }}
              onClick={() => goToQuestion(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
