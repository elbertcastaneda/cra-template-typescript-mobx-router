import { routers } from "../components/Router/router.config";

class Utils {
  getPageTitle = (pathname: string) => {
    const route = routers.filter((route) => route.path === pathname);
    return route[0] ? route[0].title : "";
  };
  getRoute = (path: string): any => {
    return routers.filter((route) => route.path === path)[0];
  };
}

export default new Utils();
