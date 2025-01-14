import { useContext, useEffect } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only navigate to home if on initial page load and not on another route

    navigate("/");
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className="h-[85%] md:h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
