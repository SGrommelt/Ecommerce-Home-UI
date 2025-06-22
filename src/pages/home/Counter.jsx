import React, { useEffect, useState } from "react";

import "./styles/Counter.css";

const Counter = () => {
  const [secondsLeft, setSecondsLeft] = useState(23 * 3600 + 59 * 60 + 59);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="counter-wrapper">
      <h1>
        TODAS LAS VELAS 2X1 <span>ÚLTIMA OPORTUNIDAD</span>
      </h1>

      <div className="countdown">
        <div className="time-section">
          <div className="time">{hours}</div>
          <div className="label">Horas</div>
        </div>
        <div className="separator">:</div>
        <div className="time-section">
          <div className="time">{minutes}</div>
          <div className="label">Minutos</div>
        </div>
        <div className="separator">:</div>
        <div className="time-section">
          <div className="time">{seconds}</div>
          <div className="label">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
