/* eslint-disable react-hooks/exhaustive-deps */
import { webApps } from "constants/webApps";
import React, { useEffect, useRef, Fragment } from "react";
import { useRecoilState } from "recoil";
import { processStore, Window } from "store/process";

function WebApp({
  containerRef,
  win,
}: {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  win: Window;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxBodyRef = useRef<HTMLDivElement>(null);
  const [running, setRunnig] = useRecoilState(processStore);

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current || !boxBodyRef.current) return;

    const box = boxRef.current;
    const boxBody = boxBodyRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      if (nextY < 0) {
        return;
      }

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
      boxBody.style.top = `${nextY}px`;
      boxBody.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    box.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  const app = webApps.find((app) => app.id === win.appId);

  const windowSize = {
    top: "top-0",
    left: "left-0",
  };

  const zIndex =
    running.currentWindow && running.currentWindow === win.id ? "z-20" : "z-10";

  return (
    <div onClick={() => setRunnig({ ...running, currentWindow: win.id })}>
      <div
        ref={boxRef}
        className={`${windowSize.left} ${windowSize.top} absolute bg-gray-800 w-[850px] h-12 ${zIndex} cursor-grab`}
      >
        <div className="flex items-center px-5 h-full w-full">
          <div className="flex gap-3">
            <button className="h-7 w-7 rounded-full bg-red-600 text-white font-bold ">
              x
            </button>
            <button className="h-7 w-7 rounded-full bg-blue-600 text-white font-bold ">
              []
            </button>
            <button className="h-7 w-7 rounded-full bg-gray-600 text-white font-bold ">
              -
            </button>
          </div>

          <p className="font-bold text-white text-center w-full mr-16 prevent-select">
            {app?.name || "App"}
          </p>
        </div>
      </div>

      <div
        className={`${windowSize.left} ${windowSize.top} absolute bg-white w-[850px] h-[500px] mt-12 ${zIndex}`}
        ref={boxBodyRef}
      >
        <iframe src={app?.url} className="w-full h-full" />
      </div>
    </div>
  );
}

export default WebApp;
