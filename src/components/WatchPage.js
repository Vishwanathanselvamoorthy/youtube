import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "./utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";

import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMsg } from "./utils/chatSlice";
import { closeBtn } from "./utils/buttonSlice";

const WatchPage = () => {
  const [liveChat, setLiveChat] = useState("");
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar());
    dispatch(closeBtn());
  }, []);
  return (
    <div className="w-full p-5 flex gap-5 mt-20">
      <div className="w-[60%]">
        <iframe
          className="w-full rounded-xl"
          width="560"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div className="w-[40%] ">
        <div className="w-full bg-[#212121] border-2 h-[600px] overflow-y-scroll rounded-xl flex flex-col-reverse ">
          <LiveChat />
        </div>
        <form
          className="w-full bg-transparent border-2 p-2 rounded-xl mt-2 flex justify-between"
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              addMsg({
                name: "Vishwa",
                msg: liveChat,
              })
            );
            setLiveChat("");
          }}
        >
          <input
            className="border-2  bg-[#3c3c3c] ml-2 rounded-xl text-white "
            placeholder="Type Here"
            value={liveChat}
            onChange={(e) => setLiveChat(e.target.value)}
          />
          <button className="font-bold text-white bg-green-600 px-2 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default WatchPage;
