import { useEffect, useState } from "react";

function DigitalClock() {
  // 1. setInteval()

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    console.log(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>Digital Clock</h1>

      <div>{time}</div>
    </>
  );
}

export default DigitalClock;
