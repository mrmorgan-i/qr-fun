import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 py-20">
      <h1>QR Code Generator</h1>
      <p>Generate QR codes for your links</p>
      <Link href="/about">About</Link>
    </div>
  );
} 