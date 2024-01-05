import { BreedImage, Cat } from "./types";

export async function fetchBreedInfoAndImages(breedId: string) {
  const fetchBreedInfo = await fetch(
    `https://api.thecatapi.com/v1/breeds/${breedId}`
  );
  const fetchBreedImages = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=8`
  );

  try {
    const [breedInfo, breedImages] = await Promise.all([
      fetchBreedInfo,
      fetchBreedImages,
    ]);
    return {
      breedInfo: (await breedInfo.json()) as Cat,
      breedImages: (await breedImages.json()) as BreedImage[],
    };
  } catch (error) {
    throw new Error("Error fetching breed info and images");
  }
}
