import * as React from "react";

import {
  //  Redirect,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";

import DocumentTitle from "react-document-title";
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
// import { Layout } from "antd";
import ProtectedRoute from "../../components/Router/ProtectedRoute";
// import SiderMenu from "../../components/SiderMenu";
import { appRouters } from "../Router/router.config";
import utils from "../../utils/utils";
import NotFoundRoute from "../Router/NotFoundRoute";
import Home from "../../scenes/Home";

// const { Content } = Layout;

interface AppLayoutProps extends RouteProps {}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { location } = props;
  console.log(location!.pathname);
  const layout = (
    <Switch>
      {location!.pathname === "/" && <Home />}
      {appRouters
        .filter((item: any) => !item.isLayout)
        .map((route: any, index: any) => (
          <Route
            exact
            key={index}
            path={route.path}
            render={(props) => (
              <ProtectedRoute
                component={route.component}
                permission={route.permission}
              />
            )}
          />
        ))}
      {location!.pathname !== "/" && <NotFoundRoute />}
    </Switch>
  );

  return (
    <DocumentTitle title={utils.getPageTitle(location!.pathname)}>
      {layout}
    </DocumentTitle>
  );
};

export default AppLayout;
