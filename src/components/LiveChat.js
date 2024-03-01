import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "./utils/chatSlice";
import { generateRandomNames, makeRandomMsg } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const liveMessage = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMsg({
          name: generateRandomNames(),
          msg: makeRandomMsg(10),
        })
      );
    }, 10000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      {liveMessage.map((msg, index) => (
        <ChatMessages key={index} chatMsg={msg} />
      ))}
    </div>
  );
};

export default LiveChat;
