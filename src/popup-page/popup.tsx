import React, { FC } from "react";
import { render } from "react-dom";

interface IProps {}
export const Popup: FC<IProps> = () => {
  const handleClick = () => {
    chrome.storage.sync.get(["dataValue1"], function (data) {
      console.log("dataValue One", data.dataValue1);
    });
  };
  const handleRedirect = () => {
    let newUrl = "http://localhost:3000";
    chrome.tabs.create({ url: newUrl }, function (tab) {});
  };
  const handleMessage = () => {
    const received = chrome.storage.sync.get("key", function (obj) {
      console.log(obj);
    });
  };

  return (
    <div>
      Popup Page 124
      <button onClick={handleClick}>Button Click</button>
      <button onClick={handleRedirect}>Redirect</button>
      <button onClick={handleMessage}>Display Message</button>
    </div>
  );
};

render(<Popup />, document.getElementById("popup"));
