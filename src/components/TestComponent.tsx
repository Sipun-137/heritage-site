import { states } from "@/utils/state";
import StateCard from "./StateCard";

export default function TestComponent() {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-8 lg:grid-cols-12  gap-4">
        {states.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300   flex justify-center items-center md:col-span-4 lg:col-span-4"
          >
            <StateCard
              name={item.name}
              capital={item.capital}
              imgurl={item.imgurl}
            />
          </div>
        ))}
      </div>
    </>
  );
}
