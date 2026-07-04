"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="border border-gray-300 rounded px-2 py-1 mt-4"
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}
