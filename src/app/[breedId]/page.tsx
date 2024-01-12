import BreedGallery from "@/lib/components/breedGallery";
import CatDetailsSection from "@/lib/components/catDetailsSection";
import { BreedImage, Cat } from "@/lib/types";
import { fetchBreedInfoAndImages } from "@/lib/utils";
import Image from "next/image";

export async function generateStaticParams() {
  const breeds: Cat[] = await fetch("https://api.thecatapi.com/v1/breeds").then(
    (res) => res.json()
  );

  return breeds.map((breed) => ({
    breedId: breed.id,
  }));
}

export default async function BreedPage({
  params,
}: {
  params: { breedId: string };
}) {
  let breedData: Cat | null = null;
  let breedImages: BreedImage[] | null = null;
  try {
    const data = await fetchBreedInfoAndImages(params.breedId);
    breedData = data.breedInfo;
    breedImages = data.breedImages;
  } catch (error) {
    console.log(error);
  }

  if (!breedData || !breedImages)
    return (
      <main className="p-10 flex items-center justify-center text-xl md:text-6xl font-bold">
        Breed not found
      </main>
    );

  return (
    <main>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-stretch">
        <div className="relative">
          <div className="bg-[#dec68b] w-3 md:h-36 lg:h-64 absolute right-full top-5 rounded-l-lg"></div>
          {breedImages[0] && (
            <Image
              src={breedImages[0].url}
              width={500}
              height={500}
              alt="Cat Image"
              className="rounded-xl aspect-square object-cover"
            />
          )}
        </div>
        <CatDetailsSection cat={breedData} />
      </div>
      {breedImages.length > 0 && <BreedGallery images={breedImages.slice(2)} />}
    </main>
  );
}
