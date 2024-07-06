import React, { useState, useEffect } from "react";
import connection from "./Connection"

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    connection.on("ReceiveMessage", (user, message) => {
      setMessages((messages) => [...messages, { user, message }]);
    });

    return () => {
      connection.off("ReceiveMessage");
    };
  }, []);

  const sendMessage = async () => {
    if (message && user) {
      await connection.invoke("SendMessage", user, message);
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((m, index) => (
          <div key={index}>
            <strong>{m.user}</strong>: {m.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
