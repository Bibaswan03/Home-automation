import Image from "next/image";
import DashBoardMain from "./Components/Dashboard/DashBoardMain";

export default async function Home() {
  try{
    let data1;
  let res = await fetch("https://kodessphere-api.vercel.app/devices/nWHFpQU", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  data1=await res.json()
}catch(err){
  console.log(err);
}
  let data = {
    fan: 2,
    bulb: 1,
    led: "#dbff03",
    ac: {
      state: 1,
      temp: 23,
    },
  };

  return (
    <div className="min-h-screen">
      <DashBoardMain data={data||data1} />
    </div>
  );
}
