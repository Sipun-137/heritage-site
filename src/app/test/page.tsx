"use client";

import DescCard from "@/components/DescCard";
import { getAllData } from "@/services/sites";
import { Key, useEffect, useState } from "react";

export default function Page() {
  const [sitedata, setSiteData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const extractdata = await getAllData();
      setSiteData(extractdata.data);
    }
    fetchData();
  });

  return (
    <>
      <div className="m-8 flex min-h-screen flex-col items-center justify-start gap-y-4 p-8 text-black">
        {sitedata.map((item: any, index: Key | null | undefined) => (
          <DescCard
          id={item._id}
            key={index}
            name={item.name}
            state={item.state}
            description={item.description}
            imgurl={item.imgurl}
          />
        ))}
      </div>
    </>
  );
}
