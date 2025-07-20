import BotProfile from "../components/BotProfile";
import SendMessage from "../components/SendMessage";
import DefaultInput from "../components/DefaultInput";
import UserBoxMessage from "../components/UserBoxMessage";
import BotBoxMessage from "../components/BotBoxMessage";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [messageValue, setMessageValue] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);

  const Send = async () => {
    if (messageValue.trim() !== "") {
      const userMessage = messageValue;
      setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
      setMessageValue("");

      try {
        const response = await fetch("http://localhost:5000/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: userMessage }),
        });

        const data = await response.json();
        setMessages((prev) => [...prev, { from: "bot", text: data.answer }]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Error connecting to the server." },
        ]);
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full min-h-screen items-center bg-gray-100 relative">
      <header className="bg-white fixed px-5 py-3 w-full auto justify-start flex">
        <BotProfile />
      </header>

      <section className="pt-24 pb-20 w-full h-auto flex flex-col px-5 gap-2 overflow-y-auto max-h-screen">
        {messages.map((msg, index) =>
          msg.from === "user" ? (
            <UserBoxMessage key={index}>{msg.text}</UserBoxMessage>
          ) : (
            <BotBoxMessage key={index}>{msg.text}</BotBoxMessage>
          )
        )}
        <div ref={bottomRef} />
      </section>

      <div className="fixed bottom-0 left-0 w-full h-auto flex justify-between items-center px-3 gap-3 pb-4">
        <DefaultInput
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
          className="w-full h-16 px-7 text-lg rounded-2xl shadow-2xl bg-white"
          type="text"
          placeholder="Message"
        />
        <SendMessage
          onClick={Send}
          className="w-20 h-auto p-5 invert"
          src="https://cdn-icons-png.flaticon.com/128/10322/10322482.png"
        />
      </div>
    </div>
  );
};

export default Chat;
