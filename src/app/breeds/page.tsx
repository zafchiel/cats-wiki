import { Cat } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

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
    <main className="grid place-items-center">
      <h1 className="text-6xl font-bold mb-10">All Breeds</h1>
      <section>
        {breeds.map((cat) => (
          <Link
            href={`/${cat.id}`}
            key={cat.id}
            className="flex flex-col md:flex-row gap-4 mb-8 p-4 rounded-xl hover:bg-[#e3e1dc]"
          >
            {/* image placeholder */}
            <div className="w-52 h-52 bg-gray-600 rounded-xl" />

            <div className="max-w-2xl">
              <h3 className="font-semibold text-xl">{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
