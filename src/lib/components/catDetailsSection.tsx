import { Cat } from "../types";
import Rating from "./rating";

type Props = {
  cat: Cat;
};

export default function ({ cat }: Props) {
  return (
    <section className="grid gap-3 max-w-md">
      <h1 className="font-bold text-6xl">{cat.name}</h1>
      <p>{cat.description}</p>
      <div>
        <span className="font-bold">Temperament:</span> {cat.temperament}
      </div>
      <div>
        <span className="font-bold">Origin:</span> {cat.origin}
      </div>
      <div>
        <span className="font-bold">Life span:</span> {cat.life_span}
      </div>
      <div className="grid gap-y-3 grid-cols-[200px_1fr]">
        <span className="font-bold">Adaptability:</span>
        <Rating rating={cat.adaptability} />

        <span className="font-bold">Affection level:</span>
        <Rating rating={cat.affection_level} />

        <span className="font-bold">Child friendly:</span>
        <Rating rating={cat.child_friendly} />

        <span className="font-bold">Grooming:</span>
        <Rating rating={cat.grooming} />

        <span className="font-bold">Intelligence:</span>
        <Rating rating={cat.intelligence} />

        <span className="font-bold">Health issues:</span>
        <Rating rating={cat.health_issues} />

        <span className="font-bold">Social needs:</span>
        <Rating rating={cat.social_needs} />

        <span className="font-bold">Stranger friendly:</span>
        <Rating rating={cat.stranger_friendly} />
      </div>
    </section>
  );
}
