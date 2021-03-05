import { FC } from "react";
import { NavigationParam } from "./NavigationParam";

export interface NavigationParamEmpty {}

export interface NavigationMapEntry {
  path: string;
  component: FC;
}

export type NavigationMap<T> = {
  [K in keyof T]: NavigationMapEntry;
};

export type NavigationRoutes = keyof NavigationParam;
