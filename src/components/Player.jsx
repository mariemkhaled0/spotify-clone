import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playerStatus,
    play,
    pause,
    track,
    time,
    prev,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="md:h-[10%] h-[15%] bg-black flex justify-between items-center text-white px-4">
      <div className="flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song-image" />
        <div>
          <p className="hidden lg:block">{track.name}</p>
          <p className="hidden lg:block">{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            className="cursor-pointer w-4"
            src={assets.shuffle_icon}
            alt="icon"
          />
          <img
            onClick={prev}
            className="cursor-pointer w-4"
            src={assets.prev_icon}
            alt="icon"
          />
          {playerStatus ? (
            <img
              onClick={pause}
              className="cursor-pointer w-4"
              src={assets.pause_icon}
              alt="icon"
            />
          ) : (
            <img
              onClick={play}
              className="cursor-pointer w-4"
              src={assets.play_icon}
              alt="icon"
            />
          )}

          <img
            onClick={next}
            className="cursor-pointer w-4"
            src={assets.next_icon}
            alt="icon"
          />
          <img
            className="cursor-pointer w-4"
            src={assets.loop_icon}
            alt="icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="text-sm lg:text-[16px] flex ml-3">
            <p>{time.currentTime.minute}</p> :<p>{time.currentTime.second}</p>
          </div>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] bg-gray-300 max-w-[500px] rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1  border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="lg:flex hidden items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="plays-icon" />
        <img className="w-4" src={assets.mic_icon} alt="plays-icon" />
        <img className="w-4" src={assets.queue_icon} alt="plays-icon" />
        <img className="w-4" src={assets.speaker_icon} alt="plays-icon" />
        <img className="w-4" src={assets.volume_icon} alt="plays-icon" />
        <div className="w-20 bg-slate-50 h-1 rounded "></div>
        <img className="w-4" src={assets.mini_player_icon} alt="plays-icon" />
        <img className="w-4" src={assets.zoom_icon} alt="plays-icon" />
      </div>
    </div>
  );
};

export default Player;
