import Link from "next/link";
import rightArrow from "../assets/icons/rightArrow.svg";
import Image from "next/image";

export default function MostSearchedSection() {
  return (
    <section className="bg-[#e3e1dc] px-3 pb-3 md:px-12 md:pb-12 pt-4 text-[#291507] rounded-b-3xl">
      <h5>Most Searched Breeds</h5>
      <hr className="h-1 bg-[#4d270c] w-12 rounded-3xl mb-4" />
      <div className="flex flex-col md:flex-row justify-between">
        <h3 className="text-3xl font-bold">66+ Breed for you to discover</h3>

        <Link href="/breeds" className="flex gap-2 items-center">
          SEE MORE <Image src={rightArrow} alt="Right Arrow Icon" />
        </Link>
      </div>
    </section>
  );
}
