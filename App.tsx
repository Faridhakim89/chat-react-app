
import React, { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Chat Sederhana</h1>

      <div className="w-full max-w-md bg-white shadow rounded-2xl p-4 flex flex-col gap-2">
        <div className="h-64 overflow-y-auto border p-2 rounded">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-blue-100 rounded mb-2">
              {msg}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2"
            placeholder="Ketik pesan..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
