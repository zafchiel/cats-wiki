import Image from "next/image";
import catImg from "../assets/images/catImg.png";
import whiteCatIcon from "../assets/icons/catWhite.svg";
import searchIcon from "../assets/icons/search.svg";
import Search from "./search";

export default function HeadingSection() {
  return (
    <section className="bg-black text-white grid grid-cols-2 rounded-t-3xl items-center">
      <div className="p-3 md:p-12 flex flex-col">
        <div className="flex gap-3">
          <h1 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
            Cats Wiki
          </h1>
          <Image
            src={whiteCatIcon}
            alt="Cat Icon"
            className="hidden md:block"
          />
        </div>
        <p className="md:text-xl">Get to know more about your cat breed</p>

        <Search />
      </div>

      <Image
        src={catImg}
        alt="Cat Image"
        className="rounded-tr-3xl h-full object-cover"
      />
    </section>
  );
}
