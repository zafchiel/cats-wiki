import Image from "next/image";
import { BreedImage } from "../types";

type Props = {
  images: BreedImage[];
};

export default function BreedGallery({ images }: Props) {
  return (
    <section className="mt-10">
      <h3 className="text-3xl font-semibold">Other photos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10">
        {images.map((img, i) => (
          <Image
            src={img.url}
            width={500}
            height={500}
            alt="Cat Image"
            key={i}
            className="rounded-xl aspect-square object-cover"
          />
        ))}
      </div>
    </section>
  );
}
