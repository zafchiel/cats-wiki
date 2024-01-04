import Image from "next/image";
import catImg from "../assets/images/catImg.png";
import Logo from "./logo";
import searchIcon from "../assets/icons/search.svg";

export default function HeadingSection() {
  return (
    <section className="bg-black text-white grid grid-cols-2 rounded-t-3xl items-center">
      <div className="p-3 md:p-12 flex flex-col">
        <Logo type="white" />
        <p>Get to know more about your cat breed</p>

        <div className="relative mt-8 ">
          <input
            type="search"
            placeholder="Enter your breed"
            className="py-3 pl-3 pr-10 w-full rounded-3xl caret-black text-black"
          />
          <Image
            src={searchIcon}
            alt="Search Icon"
            className="absolute top-4 right-4"
          />
        </div>
      </div>

      <Image
        src={catImg}
        alt="Cat Image"
        className="rounded-tr-3xl h-full object-cover"
      />
    </section>
  );
}
