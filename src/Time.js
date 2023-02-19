import React from "react";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalID = setInterval(() => {
      const date = new Date();
      const times = date.toLocaleTimeString();
      setTime(times);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return <div className="time">{time}</div>;
};

export default Time;
