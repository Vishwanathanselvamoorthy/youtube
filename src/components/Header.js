import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "./utils/sideBarSlice";
import { SEARCH_SUGGESTION_API } from "./utils/constants";
import { cacheDetails } from "./utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);

  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        fetchSearchSuggestionApi();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestionApi = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);

    const json = await data.json();

    setSearchSuggestion(json[1]);

    dispatch(
      cacheDetails({
        [searchQuery]: json[1],
      })
    );
  };

  const sideBarOpenFunc = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="p-5 bg-black  w-full text-white grid grid-flow-col items-center shadow-2xl text-3xl fixed top-0 z-10">
      <div className="flex items-center gap-14 col-span-1">
        <div>
          <FontAwesomeIcon
            className="text-gray-300"
            icon={faBars}
            onClick={() => sideBarOpenFunc()}
          />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            className="text-red-500 p-1 bg-white rounded-full"
            icon={faYoutube}
          />
          <span className="font-bold text-gray-300 ">YeahTube</span>
        </div>
      </div>

      <div className="col-span-10">
        <div className="flex">
          <input
            className="w-1/2 rounded-l-full border-[#3c3c3c] bg-transparent border-2 p-1"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border-2 border-[#3c3c3c] text-gray-300 px-5 text-lg rounded-r-full p-1">
            <FontAwesomeIcon className="text-md" icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="fixed bg-[#212121] w-[37rem] z-0">
          {searchSuggestion.map((suggestion) => (
            <ul className="flex items-center text-xl m-6 gap-4">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <li>{suggestion}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="col-span-1 ">
        <FontAwesomeIcon
          className="bg-[#3c3c3c] p-2 text-md text-gray-300  rounded-full"
          icon={faUser}
        />
      </div>
    </div>
  );
};

export default Header;
