import { Cat } from "@/lib/types";

export default async function BreedsPage() {
  let breeds: Cat[] = [];

  try {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    if (!res.ok) throw new Error("Error fetching breeds");
    breeds = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <pre>{JSON.stringify(breeds, null, 2)}</pre>
    </main>
  );
}
