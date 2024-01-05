type Props = {
  rating: number;
};

export default function Rating({ rating }: Props) {
  return (
    <div className="flex gap-3 items-center">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 <= rating) {
          return (
            <div key={i} className="bg-[#544439] w-6 md:w-12 h-2 rounded-xl" />
          );
        } else {
          return (
            <div key={i} className="bg-[#e0e0e0] w-6 md:w-12 h-2 rounded-xl" />
          );
        }
      })}
    </div>
  );
}
