import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {}

export const NotFoundRoute: FC<Props> = () => {
  return (
    <>
      <Route
        render={(props) => {
          return (
            <Redirect
              to={{
                pathname: "/exception?type=404",
                state: { from: props.location },
              }}
            />
          );
        }}
      />
    </>
  );
};

export default NotFoundRoute;
