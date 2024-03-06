import axios from "axios"
export const getAllData =async()=>{
    try {
       const res= await axios.get("/api/sites/get-all-data") 
       return res.data
    } catch (e:any) {
        console.log(e)
    }
}

export const AplaceData=async(id:string)=>{
    try {
        const res=await axios.get(`http://localhost:3000/api/sites/place-data?id=${id}`)
        return res.data
    } catch (e:any) {
        console.log(e);
    }
}