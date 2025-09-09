// src/components/CounterClock.jsx
import { useEffect, useState } from "react";

const CounterClock = () => {
  const [time, setTime] = useState(new Date());
  const [visits, setVisits] = useState(
    parseInt(localStorage.getItem("visits") || "0", 10)
  );

  useEffect(() => {
    // Update clock every second
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Increment visitor counter
    const newVisits = visits + 1;
    setVisits(newVisits);
    localStorage.setItem("visits", newVisits);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-gray-700">
        <span className="font-semibold">Current Time:</span>{" "}
        {time.toLocaleTimeString()}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Visitor Count:</span> {visits}
      </p>
    </div>
  );
};

export default CounterClock;
