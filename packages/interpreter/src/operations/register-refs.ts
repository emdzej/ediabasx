import type { RegisterRef } from "./arithmetic";

export type IntRegisterRef = RegisterRef;

export type StringRegisterRef = {
  kind: "S";
  index: number;
};

export type FloatRegisterRef = {
  kind: "F";
  index: number;
};

export type AnyRegisterRef = IntRegisterRef | StringRegisterRef | FloatRegisterRef;
