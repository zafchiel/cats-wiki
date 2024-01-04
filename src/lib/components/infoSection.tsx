import Link from "next/link";
import catImage1 from "../assets/images/cat1.jpg";
import catImage2 from "../assets/images/cat2.jpg";
import catImage3 from "../assets/images/cat3.jpg";
import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="text-[#291507] p-3 md:p-12 grid gap-3 md:grid-cols-2">
      <div className="max-w-md flex gap-3 flex-col justify-around">
        <div className="">
          <hr className="h-1 bg-[#4d270c] w-12 rounded-3xl" />
          <h3 className="text-xl md:text-3xl font-bold">
            Why should you have a cat?
          </h3>
        </div>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and axiety levels
        </p>

        <Link href="/info">READ MORE</Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-4">
          <Image
            src={catImage1}
            alt="Cat Image"
            className="rounded-3xl aspect-[2/1] max-h-36 object-cover"
          />
          <Image
            src={catImage3}
            alt="Cat Image"
            className="rounded-3xl aspect-[1/2] max-w-40 justify-self-end object-cover"
          />
        </div>

        <Image
          src={catImage2}
          alt="Cat Image"
          className="rounded-3xl  max-h-80 object-cover"
        />
      </div>
    </section>
  );
}
