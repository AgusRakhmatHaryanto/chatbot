"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.response) {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.response },
      ]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">🤖 My AI Chatbot</h1>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 items-start ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Image
                src={msg.role === "user" ? "/user-icon.png" : "/robot-icon.png"}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
              <p className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[80%]">
                {msg.content}
              </p>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 items-start">
              <Image
                src="/robot-icon.png"
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
              <p className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[80%] italic">
                Typing...
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 border rounded-lg"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
