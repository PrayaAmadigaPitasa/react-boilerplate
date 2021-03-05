import { FeatureScreen } from "../../screens";
import { NavigationMap } from "../NavigationType";
import { NavigationParamFeature } from "./NavigationParamFeature";

export const NAVIGATION_MAP_FEATURE: NavigationMap<NavigationParamFeature> = {
  feature_sub_route: { path: "/", component: FeatureScreen },
};
