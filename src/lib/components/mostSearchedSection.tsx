import Link from "next/link";
import rightArrow from "../assets/icons/rightArrow.svg";
import Image from "next/image";
import bengal from "../assets/images/bengal.jpg";
import norvegian from "../assets/images/norvegian.jpg";
import savannah from "../assets/images/savannah.jpg";
import selkirk from "../assets/images/selkirk.jpg";

export default function MostSearchedSection() {
  return (
    <section className="bg-[#e3e1dc] px-3 pb-3 md:px-12 md:pb-12 pt-4 rounded-b-3xl">
      <h5>Most Searched Breeds</h5>
      <hr className="h-1 bg-[#4d270c] w-12 rounded-3xl mb-4" />
      <div className="flex flex-col md:flex-row justify-between">
        <h3 className="text-3xl md:text-5xl font-bold">
          66+ Breeds for you to discover
        </h3>

        <Link href="/breeds" className="flex gap-2 items-center min-w-max">
          SEE MORE <Image src={rightArrow} alt="Right Arrow Icon" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-10 justify-items-center mt-8">
        <Link href={`/beng`} className="p-4 rounded-xl hover:bg-white">
          <Image
            src={bengal}
            alt="Bengal Cat"
            className="object-cover aspect-square rounded-2xl"
          />
          <p className="font-semibold mt-3">Bengal</p>
        </Link>
        <Link href={`/norw`} className="p-4 rounded-xl hover:bg-white">
          <Image
            src={norvegian}
            alt="Norvegian Forest Cat"
            className="object-cover aspect-square rounded-2xl"
          />
          <p className="font-semibold mt-3">Norvegian Forest Cat</p>
        </Link>
        <Link href={`/sava`} className="p-4 rounded-xl hover:bg-white">
          <Image
            src={savannah}
            alt="Savannah Cat"
            className="object-cover aspect-square rounded-2xl"
          />
          <p className="font-semibold mt-3">Savannah</p>
        </Link>
        <Link href={`/srex`} className="p-4 rounded-xl hover:bg-white">
          <Image
            src={selkirk}
            alt="Selkirk Rex Cat"
            className="object-cover aspect-square rounded-2xl"
          />
          <p className="font-semibold mt-3">Selkirk Rex</p>
        </Link>
      </div>
    </section>
  );
}
