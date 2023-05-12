import "./App.css";
import { useEffect, useState } from "react";

function Test({ connection }) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    connection?.on("connection", () => {
      console.log("Connected to server");
    });
    connection?.on("message", (message) => {
      console.log(message);
    });
    connection?.on("chatMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => {
      connection?.disconnect();
    };
  }, []);

  const handleSendBtn = (e) => {
    e.preventDefault();
    connection?.emit("chatMessage", inputMessage);
    setInputMessage("");
  };

  return (
    <>
      <div className="container">
        <h1>Chat Page</h1>
        <div className="d-flex flex-column align-items-center">
          <div className="chat-area">
            {messages.map((message, index) => {
              return (
                <article key={index} className="chat-message-box">
                  <p>{message}</p>
                </article>
              );
            })}
          </div>
          <form>
            <div className="d-flex chat-input-area">
              <input
                type="text"
                name="inputMessage"
                placeholder="Write message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="input-message-text"
              />
              <button
                className="input-send-btn"
                onClick={(e) => handleSendBtn(e)}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Test;
