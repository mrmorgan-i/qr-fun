"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="px-4 py-20">
      <h1>QR Code Generator</h1>
      <p>Generate QR codes for your links</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
      <Link href="/about">About</Link>
    </div>
  );
}