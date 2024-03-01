import {
  faHome,
  faUser,
  faClockRotateLeft,
  faPlay,
  faChevronDown,
  faFire,
  faPodcast,
  faLightbulb,
  faShirt,
  faTrophy,
  faNewspaper,
  faFilm,
  faBagShopping,
  faGamepad,
  faWifi,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarOpen = useSelector((state) => state.sideBar.isSideBarOpen);

  if (!sideBarOpen) {
    return null;
  }
  return (
    <div
      className=" text-white  mt-24 overflow-y-auto hide-scrollbar "
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <div className="font-bold mt-5 border-b-2">
        <ul className="flex flex-col justify-center items-center m-6">
          <Link to="/">
            <li className="hover:bg-[#3c3c3c]  rounded-lg flex items-center justify-center px-5 py-1 gap-2 ">
              <FontAwesomeIcon icon={faHome} />
              Home
            </li>
          </Link>
          <li className="hover:bg-[#3c3c3c] rounded-lg m-5 flex gap-2  items-center  px-5 py-1 justify-center">
            <FontAwesomeIcon icon={faSquareYoutube} />
            Shorts
          </li>
          <li className="hover:bg-[#3c3c3c] rounded-lg m-5 mt-1 flex gap-2 justify-center  px-5 py-1  items-center">
            <FontAwesomeIcon icon={faSquareYoutube} />
            Subscriptions
          </li>
        </ul>
      </div>
      <div className="border-b-2 ">
        <h1 className="ml-3 text-md font-bold m-3">You</h1>
        <ul className="font-bold text-sm mt-2 text-center flex flex-col justify-center items-center m-6">
          <li className="hover:bg-[#3c3c3c] my-4  rounded-lg flex items-center  px-5 py-1 justify-center gap-2 ">
            <FontAwesomeIcon icon={faUser} />
            Your Channel
          </li>
          <li className="hover:bg-[#3c3c3c] my-4  rounded-lg flex items-center   px-5 py-1 justify-center gap-2 ">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            History
          </li>
          <li className="hover:bg-[#3c3c3c] my-4  rounded-lg flex items-center  px-5 py-1 justify-center gap-2 ">
            <FontAwesomeIcon icon={faPlay} />
            Your Videos
          </li>
          <li className="hover:bg-[#3c3c3c] my-4  rounded-lg flex items-center  px-5 py-1 justify-center gap-2 ">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            Watch Later
          </li>
          <li className="hover:bg-[#3c3c3c] my-4  rounded-lg flex items-center  px-5 py-1 justify-center gap-2 ">
            <FontAwesomeIcon icon={faChevronDown} />
            Show More
          </li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="ml-3 text-md font-bold m-3">Subscriptions</h1>
        <ul className="font-bold text-sm flex flex-col justify-center items-center m-6 ">
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faSquareYoutube} />
            WWE
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1  hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faSquareYoutube} />
            Simplilearn
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1  hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faSquareYoutube} />
            Vj Siddhu Vlogs
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            Motorinc
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            GLAM SAM
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            Good Fellas
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            Empty Hand
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max  px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faSquareYoutube} />
            Show 10 more
          </li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="ml-3 text-md font-bold m-3">Explore</h1>
        <ul className="flex flex-col justify-center items-center m-6 font-bold" >
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faFire} />
            Trending
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faBagShopping} />
            Shopping
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1  hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faMusic} />
            Music
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faFilm} />
            Films
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faWifi} />
            Live
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1  hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faGamepad} />
            Gaming
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faNewspaper} />
            News
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faTrophy} />
            Sport
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faLightbulb} />
            Learning
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faShirt} />
            Fashion & beauty
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1  hover:bg-[#3c3c3c]">
            <FontAwesomeIcon icon={faPodcast} />
            Podcasts
          </li>
        </ul>
      </div>
      <div>
        <h1 className="ml-2 text-md font-bold m-3">More From YouTube</h1>
        <ul className="flex flex-col justify-center items-center font-bold m-6">
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1  hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            YouTube Premium
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            YouTube Studio
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            YouTube Music
          </li>
          <li className="rounded-lg my-5  flex items-center gap-2 justify-center w-max px-5 py-1 hover:bg-[#3c3c3c]">
            <FontAwesomeIcon
              className="text-red-500 bg-white"
              icon={faSquareYoutube}
            />
            YouTube Kids
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
