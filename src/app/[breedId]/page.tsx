import BreedGallery from "@/lib/components/breedGallery";
import CatDetailsSection from "@/lib/components/catDetailsSection";
import { BreedImage, Cat } from "@/lib/types";
import { fetchBreedInfoAndImages } from "@/lib/utils";
import Image from "next/image";

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

  if (!breedData || !breedImages) return <>Breed not found</>;

  return (
    <main>
      <div className="grid md:grid-cols-2 gap-4 place-items-center md:place-items-start">
        <div>
          <Image
            src={breedImages[0].url}
            width={500}
            height={500}
            alt="Cat Image"
            className="rounded-xl aspect-square object-cover"
          />
        </div>
        <CatDetailsSection cat={breedData} />
      </div>
      <BreedGallery images={breedImages.slice(2)} />
    </main>
  );
}
