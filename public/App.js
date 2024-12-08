// import React, { useEffect, useRef } from "react";
// import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
// import { faPlay, faPause, faBackward, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

// function App() {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     // Play the audio automatically when the page loads
//     if (audioRef.current) {
//       audioRef.current.play().catch((error) => {
//         console.error("Auto-play failed:", error); // Handle autoplay restrictions
//       });
//     }
//   }, []);

//   const playAudio = () => {
//     if (audioRef.current) audioRef.current.play();
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) audioRef.current.pause();
//   };

//   return (
//     <div className="App">
//       <header className="landing-page">
//         {/* Title */}
//         <h1 className="title">MiMI</h1>

//         {/* Social Links */}
//         <div className="social-links">
//           <a href="https://x.com/mimiaisol" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faTwitter} className="icon" />
//           </a>
//           <a href="https://t.me/+2B8oyndveEo5MTdh" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faTelegram} className="icon" />
//           </a>
//         </div>

//         {/* Music Controls */}
//         <div className="music-controls">
//           <button onClick={() => audioRef.current.currentTime -= 10}>
//             <FontAwesomeIcon icon={faBackward} /> Rewind
//           </button>
//           <button onClick={playAudio}>
//             <FontAwesomeIcon icon={faPlay} /> Play
//           </button>
//           <button onClick={pauseAudio}>
//             <FontAwesomeIcon icon={faPause} /> Pause
//           </button>
//           <button>
//             <FontAwesomeIcon icon={faVolumeUp} /> Volume
//           </button>
//         </div>

//         {/* Audio Element */}
//         <audio ref={audioRef} src="/song.mp3" loop />
//       </header>
//     </div>
//   );
// }

// export default App;
