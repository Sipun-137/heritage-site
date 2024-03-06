import axios from "axios";

export const AddPlace=async (formData:any)=>{
    try {
        const response =await axios.post("/api/sites/add-heritage-site",formData)
        return response.data
    } catch (e:any) {
        console.log(e);
    }
}