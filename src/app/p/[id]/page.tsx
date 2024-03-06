import ImageViewer from "@/components/ImageViewer";
import { AplaceData } from "@/services/sites";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const retrieveddata = await AplaceData(id);
  console.log(retrieveddata);
  const sitedata = retrieveddata.data;
  return (
    <>
      <title>{sitedata.name}</title>
      <div className="flex justify-start items-start gap-y-4 min-h-screen flex-col text-black m-8 ">
        <div className="bg-[#aee7e3] w-full rounded-xl p-2 mt-4 md:px-5 ">
          <h1 className="text-black font-serif capitalize text-3xl">{sitedata.name}</h1>
          <span className="text-gray-700 font-mono capitalize ">{sitedata.state}</span>
        </div>
        <div>
          <ImageViewer imgurl={sitedata.imgurl} />
        </div>
        <p className="container border border-lime-300 rounded-xl mx-auto p-3 text-white text-xl ">Description</p>
        <div className="bg-[#c4f8ed] container rounded-xl p-2 md:px-5">
          {
            sitedata?sitedata.description:"not available yet"
          }
        </div>
      </div>
    </>
  );
}
