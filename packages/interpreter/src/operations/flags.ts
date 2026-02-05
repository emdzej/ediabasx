import { Flags } from "../flags";

export function clrc(flags: Flags): void {
  flags.c = false;
}

export function setc(flags: Flags): void {
  flags.c = true;
}

export function clrv(flags: Flags): void {
  flags.v = false;
}

export function setv(flags: Flags): void {
  flags.v = true;
}
