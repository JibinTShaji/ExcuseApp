import axios from "axios";
import {useState} from "react";

function App() {
  const[excuse,setexcuse]=useState("Click Any buttons below to make an excuse.")

  const fetchData=async(excuse)=>{
    const{data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    setexcuse(data[0].excuse)
  }
    return (
      <div className="flex justify-center items-center flex-col bg-sky-800 h-screen ">
     <div className="flex-justify-center">
     <h1 className=" text-xl lg:text-3xl ml-8 font-bold text-yellow-500">Generate An Execuse</h1>
     </div>
      <div className="flex flex-col gap-10 pt-12">
        <button className="bg-white border-[6px] border-red-500 text-black font-semibold px-4 py-3 rounded-lg" onClick={()=>{fetchData("funny")}}>Funny</button>
        <button className="bg-white border-[6px] border-red-500 text-black font-semibold   px-4 py-3 rounded-lg" onClick={()=>{fetchData("family")}}>Family</button>
        <button className="bg-white border-[6px] border-red-500 text-black font-semibold  px-4 py-3 rounded-lg" onClick={()=>{fetchData("developers")}}>Developer</button>
      </div>
      <div className="flex border-[5px] rounded-xl border-red-500 bg-black px-2 py-5 mt-3">
      <h1 className="text-white font-bold text-lg  px-3">{excuse}</h1>
      </div>
      </div>
    );
}

export default App;
