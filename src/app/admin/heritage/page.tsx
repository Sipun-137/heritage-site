"use client";

import InputControl from "@/components/InputControl";
import { SiteInfoFormControl } from "@/utils/input";
import { useState } from "react";

interface formDataType {
  name: string;
  state: string;
  description: string;
  imgurl: string[];
}
export default function Heritage() {
  const initialformData: formDataType = {
    name: "",
    state: "",
    description: "",
    imgurl: [],
  };

  const [formData, setFormData] = useState<any>(initialformData);
  console.log(formData);
  return (
    <>
      <title> Heritage | add-data </title>
      <section className="m-8">
        <div className="flex justify-center items-center">
          this is the data adding section for the site for the first time
        </div>
        <div className="flex justify-center items-center m-4 w-full">
          <div className="w-full mt-6 mr-0 mb-0 space-y-8 bg-[#FFF5EE] rounded-lg">
            <div className="m-4 p-2">
              <div></div>
            </div>
            <div className=" flex  gap-3 flex-col m-9 ">
              {SiteInfoFormControl.map((item, index) => (
                <div key={index}>
                  <InputControl
                    tid={item.id}
                    type={item.type}
                    label={item.label}
                    helper={item.helper}
                    onChange={(event: any) => {
                      setFormData({
                        ...formData,
                        [item.id]: event.target.value,
                      });
                    }}
                    value={formData[item.id]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
