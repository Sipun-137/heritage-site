"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface urlType {
  imgurl: string[];
}

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function ImageViewer({ imgurl }: urlType) {
  return (
    <>
      <div className="container mx-auto px-5 py-2 ">
        <div className="text-xl mb-5 font-semibold text-white">Images :</div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          {imgurl.map((image, index) => (
            <div
              key="{index}"
              className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                src={image}
                alt={image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
