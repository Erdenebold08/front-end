import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState(0); 
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        localStorage.setItem('time', newTime); 
        return newTime;
      });
    }, 1000);
  }, []);

  useEffect(() => {
  setTimeout(() => {
    setTime(time +1);
  }, 1000);
  }, [time]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="text-center text-white font-sans">
        <div className="text-6xl font-bold">
          {time}
        </div>
      </div>
    </div>
  );
}