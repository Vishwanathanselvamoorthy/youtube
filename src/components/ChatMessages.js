import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChatMessages = ({ chatMsg }) => {
  const { name, msg } = chatMsg;
  return (
    <div className="flex text-white ml-3 p-1">
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>

      <span className="px-2">{name}:</span>
      <span>{msg}</span>
    </div>
  );
};

export default ChatMessages;
