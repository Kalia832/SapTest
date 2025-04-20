import React, { useEffect, useState } from "react";

const Timer = ({ duration, onTimeout }) => {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeout(); // Time's up!
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, onTimeout]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secs = (sec % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="text-center fw-bold fs-5 text-danger">
      ⏱️ Time Left: {formatTime(secondsLeft)}
    </div>
  );
};

export default Timer;
