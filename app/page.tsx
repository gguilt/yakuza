import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>Yakuza - Virtual Gathering Space</h1>
      </header>

      <main></main>

      <footer>
        2024 &copy; <Link href="https://gokay.works">Gökay Gültekin</Link>
        {" | "}
        <Link href="https://github.com/naphteine/yakuza">Source code</Link>
      </footer>
    </>
  );
}
