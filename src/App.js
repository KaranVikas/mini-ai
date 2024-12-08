import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faPause, faBackward, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1); // State for volume (1 is full volume)

  useEffect(() => {
    // Attempt to play the audio when the page loads, muted first
    if (audioRef.current) {
      audioRef.current.volume = volume; // Set initial volume
      audioRef.current.muted = false; // Start muted to bypass autoplay restrictions
      audioRef.current
        .play()
        .then(() => {
          audioRef.current.muted = false; // Unmute once it starts playing
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Autoplay blocked by browser:", error);
        });
    }
  }, [volume]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => console.log("Audio playing"))
        .catch((error) => console.error("Error playing audio:", error));
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      console.log("Audio paused");
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume); // Update state
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Set audio element volume
    }
  };

  return (
    <div className="App">
      <header className="landing-page">
        {/* Title */}
        <h1 className="title">MiMI AI</h1>
        <h3>They 
          say music is the universal language,
           but have you ever tried to decipher the symphony of chaos? The answers lie in the notes you don’t play. Stick around, listen closely, and maybe—just maybe—you’ll find the rhythm that unlocks the secret. $MIMIAI, the key to more than just a tune.</h3>
        {/* Social Links */}
        <div className="social-links">
          <a href="https://x.com/mimiaisol" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://t.me/+2B8oyndveEo5MTdh" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="icon" />
          </a>
        </div>

        {/* Music Controls */}
        <div className="music-controls">
          <button onClick={() => (audioRef.current.currentTime -= 10)}>
            <FontAwesomeIcon icon={faBackward} /> Rewind
          </button>
          <button onClick={playAudio}>
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button onClick={pauseAudio}>
            <FontAwesomeIcon icon={faPause} /> Pause
          </button>
          <div className="volume-control">
            <FontAwesomeIcon icon={faVolumeUp} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>

        {/* Audio Element */}
        <audio ref={audioRef} src="/song.mp3" loop />
      </header>
    </div>
  );
}

export default App;
