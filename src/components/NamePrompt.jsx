import React, { useState } from "react";

const questionOptions = [10, 30, 50, 80, 100];

const NamePrompt = ({ onStart }) => {
  const [name, setName] = useState("");
  const [selectedNum, setSelectedNum] = useState(null);

  const handleStart = () => {
    if (name.trim() === "" || !selectedNum) {
      alert("Please enter your name and select the number of questions.");
      return;
    }
    onStart(name.trim(), selectedNum);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-sm">
        <h3 className="mb-3 text-center">Start Your Test</h3>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h5 className="mb-3 text-center">Select Number of Questions:</h5>
        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {questionOptions.map((num) => (
            <button
              key={num}
              className={`btn rounded-circle ${
                selectedNum === num ? "btn-primary" : "btn-outline-primary"
              }`}
              style={{ width: "60px", height: "60px", fontSize: "1.1rem" }}
              onClick={() => setSelectedNum(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <button className="btn btn-success w-100" onClick={handleStart}>
          Start Test
        </button>
      </div>
    </div>
  );
};

export default NamePrompt;
