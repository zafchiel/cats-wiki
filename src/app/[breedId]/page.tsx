import BreedGallery from "@/lib/components/breedGallery";
import CatDetailsSection from "@/lib/components/catDetailsSection";
import { Cat } from "@/lib/types";

export default async function BreedPage({
  params,
}: {
  params: { breedId: string };
}) {
  let breedData: Cat | null = null;
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/breeds/${params.breedId}`
    );
    if (!res.ok) throw new Error("Failed to fetch");

    breedData = await res.json();
  } catch (error) {
    console.log(error);
  }

  if (!breedData) return <>Breed not found</>;

  return (
    <main>
      <div className="grid md:grid-cols-2">
        <div></div>
        <CatDetailsSection cat={breedData} />
      </div>
      <BreedGallery />
    </main>
  );
}