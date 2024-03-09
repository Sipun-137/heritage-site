import StateCard from "@/components/StateCard";
import { states } from "@/utils/state";

export default function page() {
  return (
    <>
      <title>heritage states</title>
      <div className="m-8 p-3 flex items-center justify-between flex-wrap gap-4  ">
        {states.map((item, index) => (
          <StateCard
            key={index}
            name={item.name}
            capital={item.capital}
            imgurl={item.imgurl}
          />
        ))}
      </div>
    </>
  );
}
