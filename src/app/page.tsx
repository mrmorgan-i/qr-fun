import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 py-20">
      <h1>QR Code Generator</h1>
      <Link href="/about">About</Link>
    </div>
  );
} 