import { StaticImageData } from "next/image";
import explorerImg from "assets/apps/explorer.png";
import reactChatImg from "assets/apps/react-chat.webp";

export interface webApps {
  id: number;
  name: string;
  image: StaticImageData;
  category: string;
  repo: string;
  info: string;
  url: string;
  config: {
    initialW: string;
    initialH: string;
    initialX: number;
    initialY: number;
    resize: boolean;
  };
}

export const webApps: webApps[] = [
  {
    id: 1,
    name: "Internet Explorer",
    image: explorerImg,
    category: "internet",
    repo: "",
    url: "https://www.bing.com",
    info: "Navegador de internet",
    config: {
      initialW: "w-full",
      initialH: "h-full",
      initialX: 50,
      initialY: 50,
      resize: true,
    },
  },
  {
    id: 2,
    name: "React Chat",
    image: reactChatImg,
    category: "internet",
    repo: "",
    url: "https://react-chat-freddy.netlify.app",
    info: "App de chat",
    config: {
      initialW: "w-full",
      initialH: "h-school",
      initialX: 50,
      initialY: 50,
      resize: true,
    },
  },
];
