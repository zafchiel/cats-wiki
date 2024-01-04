import Image from "next/image";
import catImg from "../assets/images/catImg.png";
import Logo from "./logo";

export default function HeadingSection() {
  return (
    <section className="bg-black text-white grid grid-cols-2 rounded-t-3xl items-center">
      <div className="p-3 md:p-12 flex flex-col">
        <Logo type="white" />
        <p>Get to know more about your cat breed</p>

        <input className="mt-8" />
      </div>

      <Image
        src={catImg}
        alt="Cat Image"
        className="rounded-tr-3xl h-full object-cover"
      />
    </section>
  );
}
