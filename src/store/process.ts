import { atom } from "recoil";

export type Window = {
  appId: number;
  status: "show" | "min";
};

export interface ProcessState {
  deskAppSelected: number | null;
  currentWindow: number | null;
  windows: Window[];
}

export const processStore = atom({
  key: "process",
  default: {
    deskAppSelected: null,
    currentWindow: null,
    windows: [],
  } as ProcessState,
});
