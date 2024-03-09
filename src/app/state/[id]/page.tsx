import DescCard from "@/components/DescCard";
import { StateData } from "@/services/sites";


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const sitedata = await StateData(id);
  console.log(sitedata);
  // const sitedata = retrieveddata.data;
  return (
    <>
      <title>{sitedata.name}</title>
      <div className="m-8 flex min-h-screen flex-col items-center justify-start gap-y-4 p-8 text-black">
      {sitedata.map((item: any, index: number) => (
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
