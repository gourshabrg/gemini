import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prvPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  console.log(prvPrompts);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent </p>
            {prvPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-icon recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>activity</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>setting</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
