import Image from "next/image";
import whiteCatIcon from "../assets/icons/catWhite.svg";
import blackCatIcon from "../assets/icons/cat.svg";
import Link from "next/link";

export default function Logo({ type }: { type: "white" | "black" }) {
  return (
    <Link href="/" className="flex gap-3">
      <p className="text-xl font-bold">Cats Wiki</p>
      <Image
        src={type === "black" ? blackCatIcon : whiteCatIcon}
        alt="Cat Icon"
      />
    </Link>
  );
}
