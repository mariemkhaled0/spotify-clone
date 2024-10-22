import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="img" />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <p className="mt-1">
            <img className="inline-block w-5 mr-2" src={assets.spotify_logo} />
            <b>spotify</b> +1,323,154 likes +<b>50 songs</b> about 2hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" alt="icon" src={assets.clock_icon} />
      </div>
      <hr />
      {songsData.map((song, i) => (
        <div
          onClick={() => playWithId(song.id)}
          key={i}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{i + 1}</b>
            <img className="inline w-10 mr-5" src={song.image} />
            {song.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-center text-[15px]">{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
