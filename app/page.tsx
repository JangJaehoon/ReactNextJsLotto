"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
      <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>Count: {count}</div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>Inputed Text: {text}</div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 rounded px-2 py-1 mt-4"
        />
      </div>
    </div>
  );
}
