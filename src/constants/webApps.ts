import { StaticImageData } from "next/image";
import browserImg from "assets/apps/explorer.png";
import reactChatImg from "assets/apps/react-chat.webp";
import portafoliotImg from "assets/apps/portafolio.png";
import toktokImg from "assets/apps/toktok.png";
import carpiImg from "assets/apps/carpiservicios.jpg";
import fredflixImg from "assets/apps/fredflix.jpg";

export interface webApps {
  id: number;
  name: string;
  image: StaticImageData;
  category: string;
  info: string;
  url: string;
  config: {
    initialW: string;
    initialH: string;
    inResize: string;
  };
}

export const webApps: webApps[] = [
  {
    id: 0,
    name: "Mi Portafolio ❤️",
    image: portafoliotImg,
    category: "webapps",
    url: "https://fwebmaster.netlify.app",
    info: "Navegador de internet",
    config: {
      initialW: "w-full",
      initialH: "h-full",
      inResize: "lg:w-1/2 lg:h-[80%]",
    },
  },
  {
    id: 1,
    name: `Internet Explorer ${new Date().getFullYear()}`,
    image: browserImg,
    category: "internet",
    url: "https://bing.com/",
    info: "Navegador de internet",
    config: {
      initialW: "w-full",
      initialH: "h-full",
      inResize: "lg:w-1/2 lg:h-[80%]",
    },
  },
  {
    id: 2,
    name: "React Chat",
    image: reactChatImg,
    category: "internet",
    url: "https://fwebmaster-react-chat.netlify.app/",
    info: "App de chat",
    config: {
      initialW: "w-full lg:w-1/3",
      initialH: "h-[87%] xl:h-[90%]",
      inResize: "w-full h-[97%]",
    },
  },
  {
    id: 3,
    name: "Tok Tok",
    image: toktokImg,
    category: "internet",
    url: "https://fwebmaster-tok-tok.netlify.app/",
    info: "App de chat",
    config: {
      initialW: "w-full lg:w-1/3",
      initialH: "h-[87%] xl:h-[90%]",
      inResize: "w-full h-[97%]",
    },
  },
  {
    id: 4,
    name: `Carpiservicios GT`,
    image: carpiImg,
    category: "internet",
    url: "https://www.carpiservicios.com/",
    info: "My First Client",
    config: {
      initialW: "w-full",
      initialH: "h-full",
      inResize: "lg:w-1/2 lg:h-[90%]",
    },
  },
  {
    id: 5,
    name: `FredFlix`,
    image: fredflixImg,
    category: "internet",
    url: "https://fredflix-gt.netlify.app",
    info: "NetflixClone",
    config: {
      initialW: "w-full",
      initialH: "h-full",
      inResize: "lg:w-1/2 lg:h-[90%]",
    },
  },
];
