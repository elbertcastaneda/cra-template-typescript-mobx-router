import React, { FC, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { RouteProps } from "react-router-dom";
import DummyStore from "../../stores/dummyStore";
import Stores from "../../stores/storeIdentifier";

interface Props extends RouteProps {}

interface InjectedProps extends Props {
  dummyStore: DummyStore;
}

const Home: FC<Props> = (props) => {
  const { dummyStore } = props as InjectedProps;
  useEffect(() => {
    dummyStore.getTodo();
  }, [dummyStore]);

  return (
    <div>
      <h1>HOME</h1>
      <h2>{dummyStore.dummyText}</h2>
      <h3>{dummyStore.todo.title}</h3>
    </div>
  );
};

export default inject(Stores.DummyStore)(observer(Home));
