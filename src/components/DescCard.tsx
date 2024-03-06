import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface SiteData {
  id:string
  name: string;
  state: string;
  description: string;
  imgurl: string[];
}

export default function DescCard({
  id,
  name,
  state,
  description,
  imgurl,
}: SiteData) {
  const router=useRouter();



  return (
    <>
      <div className="z-5  w-full rounded-md bg-pink-100 p-2 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="flex md:grid-rows-4 flex-col gap-4 md:grid md:grid-cols-12 p-3 w-full">
            <div className="col-span-5 row-span-4">
              <div className="flex aspect-video items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${imgurl[0]}`} alt={"images"} loading="lazy" />
              </div>
            </div>
            <div className="col-span-7 col-start-6 row-span-1">
              <div className=" p-1 flex justify-center items-start flex-col w-full h-full gap-1">
                <p className="text-[1.2rem] font-semibold"> {name}</p>
                <p className="text-sm text-gray-600">{state}</p>
              </div>
            </div>
            <div className="col-span-7 col-start-6 row-span-2 row-start-2">
              {description}
            </div>
            <div className="col-span-7 col-start-6 row-span-1 row-start-4">
              <Button
                fullWidth
                variant="outlined"
                className="text-black "
                onClick={() => {router.push(`/p/${id}`)}}
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
