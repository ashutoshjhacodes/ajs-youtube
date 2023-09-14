import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="my-6 border border-black h-[600px] width w-full bg-slate-100 pr-4 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit", liveMessage);
          dispatch(
            addMessage({
              name: "A J",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-4/5"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-1/5 px-2 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
