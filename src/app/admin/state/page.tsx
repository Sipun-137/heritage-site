"use client";

import InputControl from "@/components/InputControl";
import { StateFormControl } from "@/utils/input";

import { Key, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseConfig } from "@/utils";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {  AddStateInfo } from "@/services/admin/place";
import toast, { Toaster } from "react-hot-toast";
import { states } from "@/utils/state";

interface formDataType {
  name: string;
  capital: string;
  imgurl: string;
}
export default function Heritage() {
  const initialformData = {
    name: "",
    capital: "",
    imgurl: "",
  };

  const [formData, setFormData] = useState<any>(initialformData);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app, process.env.FIREBASEUTILURL as string);
  const createuniquefileName = (getFile: File) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(2, 12);
    return `${getFile.name}-${timeStamp}-${randomStringValue}`;
  };

  async function helperForUploadingImageToFirebase(file: File) {
    const getFileName = createuniquefileName(file);
    const storageReference = ref(storage, `state/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);

    return new Promise((resolve, reject) => {
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((downLoadUrl) => resolve(downLoadUrl))
            .catch((error) => reject(error));
        }
      );
    });
  }
  async function handleImage(event: any) {
    console.log(event.target.files);
    const imagefile = event.target.files;
    const extractImageUrl = await helperForUploadingImageToFirebase(
      imagefile[0]
    );
    const newUrl: string = extractImageUrl as string;
    setFormData({ ...formData, imgurl: newUrl });
  }

  async function handleAddPlace() {
    const response = await AddStateInfo(formData);
    if (response.success) {
      setFormData(initialformData);
      toast.success("Successfully created!");
    }
  }
  console.log(formData);
  return (
    <>
      <Toaster position="top-right" />
      <title> Heritage | Admin | State-Info </title>
      <section className="m-8">
        <div className="flex justify-center items-center">
          this is the data adding section for the site for the first time
        </div>
        <div className="flex justify-center items-center m-4 w-full">
          <div className="w-full mt-6 mr-0 pb-6 space-y-8 bg-[#FFF5EE] rounded-lg">
            <div className="m-4 p-2">
              <div>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" onChange={handleImage} />
                </Button>
              </div>
            </div>
            <div className=" flex  gap-3 flex-col m-9 ">
              {StateFormControl.map((item, index) => (
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
              <div>
                <Button
                  className="text-black"
                  variant="outlined"
                  size="small"
                  onClick={handleAddPlace}
                >
                  Add place
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
