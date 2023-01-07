import Window from "components/Window";
import { webApps } from "constants/webApps";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { MdOutlineApps } from "react-icons/md";
import { useRecoilState } from "recoil";
import { processStore } from "store/process";

export default function Home() {
  const [running, setRunning] = useRecoilState(processStore);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.hdqwalls.com/wallpapers/arch-linux-hd.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-full flex flex-col justify-between relative"
      onClick={() => console.log("click desktop")}
    >
      <Window />
      <div className="p-4 text-white overflow-hidden h-full">
        {webApps.map((app) => {
          return (
            <div
              className="w-[82px] text-center text-sm p-2 cursor-pointer border border-transparent hover:border-gray-500 rounded hover:bg-gray-500/50"
              onClick={() => console.log("click app")}
              key={app.name}
            >
              <Image src={app.image} width={70} height={70} alt={app.name} />
              <p>{app.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex bg-gray-800 py-2 px-4 z-50">
        <button className="p-2 rounded hover:bg-gray-900">
          <MdOutlineApps className="text-white text-4xl" />
        </button>
      </div>
    </div>
  );
}
