import LoadableComponent from "./../Loadable/index";

export const userRouter: any = [
  {
    path: "/user",
    name: "user",
    title: "User",
    component: LoadableComponent(() =>
      import("../../components/Layout/UserLayout")
    ),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: "/user/login",
    name: "login",
    title: "LogIn",
    component: LoadableComponent(() => import("../../scenes/Login")),
    showInMenu: false,
  },
];

export const appRouters: any = [
  {
    path: "/",
    exact: true,
    name: "home",
    permission: "",
    title: "Home",
    icon: "home",
    component: LoadableComponent(() =>
      import("../../components/Layout/AppLayout")
    ),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: "/sub",
    exact: true,
    name: "sub",
    permission: "",
    title: "Sub",
    icon: "sub",
    component: LoadableComponent(() =>
      import("../../scenes/Sub")
    ),
    showInMenu: false,
  },
  {
    path: "/exception?:type",
    permission: "",
    title: "exception",
    name: "exception",
    icon: "info-circle",
    showInMenu: false,
    component: LoadableComponent(() => import("../../scenes/Exception")),
  },
];

export const routers = [...userRouter, ...appRouters];
