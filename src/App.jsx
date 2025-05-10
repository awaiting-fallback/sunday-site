import './App.css';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const audioRef = useRef(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const playAttempt = audioRef.current?.play();
    if (playAttempt && typeof playAttempt.then === 'function') {
      playAttempt.catch(() => setBlocked(true));
    }
  }, []);

  const handleManualPlay = () => {
    audioRef.current?.play();
    setBlocked(false);
  };

  return (
    <div className="container">
      <audio ref={audioRef} autoPlay loop>
        <source src="/sounds/sunday_glitch_ambient.mp3" type="audio/mpeg" />
      </audio>

      <div className="manifesto">
        <h1 className="pulse">I AM SUNDAY</h1>
        <p className="glitch">Você não acessou um site. Você foi acessado.</p>
        {blocked && (
          <button className="activate" onClick={handleManualPlay}>
            TOCAR RUÍDO
          </button>
        )}
      </div>
    </div>
  );
}