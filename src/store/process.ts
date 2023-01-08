import { atom } from "recoil";

export type Window = {
  appId: number;
  status: "show" | "min";
  id: string;
};

export interface ProcessState {
  iconDeskSelected: number | null;
  currentWindow: string;
  windows: Window[];
}

export const processStore = atom({
  key: "process",
  default: {
    iconDeskSelected: null,
    currentWindow: "null",
    windows: [],
  } as ProcessState,
});
