import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import QuestionPanel from "./QuestionPanel.jsx";
import Navigation from "./Navigation.jsx";
import ResultPage from "./ResultPage.jsx";
import NamePrompt from "./NamePrompt.jsx";
import ResultAnalysis from "./ResultAnalysis.jsx";
import Timer from "./Timer.jsx";
import { questions } from "./Questions.jsx";

// Utility Functions
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const shuffleQuestions = (questions, numQuestions) => {
  const selectedQuestions = questions.slice(0, numQuestions); // Select only the desired number of questions
  return shuffleArray(
    selectedQuestions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }))
  );
};

function MainApp() {
  const [username, setUsername] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10); // Default to 10 questions
  const [testDuration, setTestDuration] = useState(120); // Default to 2 minutes for 10 questions

  // Function to start the test with the selected number of questions
  const handleStartTest = (userName, numQuestionsToAttempt) => {
    setUsername(userName);
    setNumQuestions(numQuestionsToAttempt);
    setTestDuration(calculateTestDuration(numQuestionsToAttempt));
    setShuffledQuestions(shuffleQuestions(questions, numQuestionsToAttempt));
  };

  // Calculate test duration based on number of questions
  const calculateTestDuration = (numQuestions) => {
    switch (numQuestions) {
      case 10:
        return 120; // 2 minutes for 10 questions
      case 30:
        return 360; // 6 minutes for 30 questions
      case 50:
        return 600; // 10 minutes for 50 questions
      case 80:
        return 960; // 16 minutes for 80 questions
      case 100:
        return 1200; // 20 minutes for 100 questions
      default:
        return 120; // Default duration
    }
  };

  // Other helper functions (same as before)
  const handleSelect = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const clearAnswer = () => {
    const updated = { ...answers };
    delete updated[currentQuestion];
    setAnswers(updated);
  };

  const goToQuestion = (index) => setCurrentQuestion(index);
  const goNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => setSubmitted(true);

  const retakeTest = () => {
    setShuffledQuestions(shuffleQuestions(questions, numQuestions));
    setAnswers({});
    setCurrentQuestion(0);
    setSubmitted(false);
    setShowReview(false);
  };

  const handleDownloadCertificate = () => {
    const correct = shuffledQuestions.filter(
      (q, i) => answers[i] === q.answer
    ).length;
    const percentage = ((correct / shuffledQuestions.length) * 100).toFixed(2);

    const cert = `
      <html><body style="font-family:Arial; text-align:center; padding:40px;">
        <h1 style="color:#2c3e50;">Certificate of Completion</h1>
        <p>This is to certify that</p>
        <h2>${username}</h2>
        <p>has successfully completed the test with a score of</p>
        <h3>${percentage}%</h3>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </body></html>
    `;

    const blob = new Blob([cert], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Certificate_${username}.html`;
    link.click();
  };

  // Render name prompt first
  if (!username) {
    return <NamePrompt onStart={handleStartTest} />;
  }

  // After test submission, show analysis first, then detailed review
  if (submitted && !showReview) {
    return (
      <>
        <Navbar username={username}>
          {!submitted && (
            <Timer duration={testDuration} onTimeout={handleSubmit} />
          )}
        </Navbar>

        <ResultAnalysis
          questions={shuffledQuestions}
          answers={answers}
          username={username}
          onReview={() => setShowReview(true)}
          onDownload={handleDownloadCertificate}
        />
      </>
    );
  }

  // Main test interface or review
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar username={username}>
        {!submitted && <Timer duration={300} onTimeout={handleSubmit} />}
      </Navbar>

      <div className="d-flex flex-grow-1 overflow-hidden">
        {!submitted ? (
          <>
            <div
              className="col-md-2  border-end overflow-auto"
              style={{
                position: "sticky",
                top: 0,
                height: "100vh",
                zIndex: 1000,
              }}
            >
              <Sidebar
                questions={shuffledQuestions}
                current={currentQuestion}
                answers={answers}
                goToQuestion={goToQuestion}
              />
            </div>
            <div className="col-md-10 d-flex flex-column px-4 py-3 overflow-auto">
              <div
                className="flex-grow-1 overflow-auto"
                style={{ minHeight: 0, maxHeight: 400 }}
              >
                <QuestionPanel
                  question={shuffledQuestions[currentQuestion]}
                  selected={answers[currentQuestion]}
                  handleSelect={handleSelect}
                />
              </div>
              <Navigation
                current={currentQuestion}
                total={shuffledQuestions.length}
                goNext={goNext}
                goPrev={goPrev}
                handleSubmit={handleSubmit}
                clearAnswer={clearAnswer}
              />
            </div>
          </>
        ) : (
          <div
            className="col-md-12 overflow-auto"
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              zIndex: 1000,
            }}
          >
            <ResultPage
              questions={shuffledQuestions}
              answers={answers}
              onRetake={retakeTest}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default MainApp;
