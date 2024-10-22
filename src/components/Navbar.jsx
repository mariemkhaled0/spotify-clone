import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt="img"
            src={assets.arrow_left}
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt="img"
            src={assets.arrow_right}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white cursor-pointer text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">
            Explore Premium
          </p>
          <p className="bg-black text-white cursor-pointer py-1 px-3 rounded-2xl text-[15px]">
            install app
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full  cursor-pointer flex justify-center items-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <p className="bg-white cursor-pointer text-black px-4 py-1 rounded-2xl ">
          All
        </p>
        <p className="bg-black cursor-pointer px-4 py-1 rounded-2xl">Music</p>
        <p className="bg-black cursor-pointer px-4 py-1 rounded-2xl">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
