import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black p-4 text-white rounded-t-3xl flex justify-between">
      <Link href="/" className="font-bold text-xl">
        Cats Wiki
      </Link>

      <div>
        <Link href="https://github.com/zafchiel">@zafchiel, </Link>
        &#169;{new Date().getFullYear()}
      </div>
    </footer>
  );
}
