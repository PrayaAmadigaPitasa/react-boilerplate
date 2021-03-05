import { useParams } from "react-router";
import { NavigationParam } from "./NavigationParam";

export function useNavigationParam<R extends keyof NavigationParam>(_route: R) {
  return useParams<NavigationParam[R]>();
}
