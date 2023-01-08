import WebApp from "components/WebApp";
import { webApps } from "constants/webApps";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useRef } from "react";
import { MdOutlineApps } from "react-icons/md";
import { useRecoilState } from "recoil";
import { processStore } from "store/process";

export default function Home() {
  const [running, setProcess] = useRecoilState(processStore);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeIconDeskClass = "border-gray-500 bg-gray-500/50 border";

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative"
      onClick={() => console.log("click desktop")}
    >
      {running.windows.length !== 0 &&
        running.windows.map((win, i) => {
          return <WebApp key={i} containerRef={containerRef} win={win} />;
        })}

      <div
        style={{
          backgroundImage:
            "url(https://images.hdqwalls.com/wallpapers/arch-linux-hd.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="p-4 text-white overflow-hidden h-[90%] flex flex-wrap gap-3 prevent-select absolute top-0 left-0 w-full"
      >
        {webApps.map((app) => {
          //ICONO DE APP
          return (
            <div
              className={`w-[85px] h-[130px] ${
                running.iconDeskSelected === app.id && activeIconDeskClass
              } text-center text-sm p-2 cursor-pointer border border-transparent hover:border-gray-500 rounded hover:bg-gray-500/50`}
              onClick={() => {
                //Esto abre una nueva ventana si el icono ya fue seleccionado y se le hizo click de nuevo
                if (running.iconDeskSelected === app.id) {
                  const newWindowId = nanoid(10);

                  setProcess({
                    ...running,
                    windows: [
                      ...running.windows,
                      { appId: app.id, status: "show", id: newWindowId },
                    ],
                    currentWindow: newWindowId,
                  });
                }
                //Si el icono no esta seleccionado lo selecciona al hacerle click
                if (running.iconDeskSelected !== app.id) {
                  setProcess({ ...running, iconDeskSelected: app.id });
                }
              }}
              key={app.name}
            >
              <Image src={app.image} width={70} height={70} alt={app.name} />
              <p>{app.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex bg-gray-800 py-2 px-4 z-50 absolute bottom-0 left-0 w-full h-[10%]">
        <button className="p-2 rounded hover:bg-gray-900">
          <MdOutlineApps className="text-white text-4xl" />
        </button>
      </div>
    </div>
  );
}
