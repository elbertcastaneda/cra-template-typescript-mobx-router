import React, { FC } from "react";
import { observer, inject } from "mobx-react";
import "./App.scss";
import Stores from "./stores/storeIdentifier";
import DummyStore from "./stores/dummyStore";
import Router from "./components/Router";

interface IAppProps {
  dummyStore?: DummyStore;
}

const App: FC<IAppProps> = (props) => {
  return <Router />;
};

// export default App;
export default inject(Stores.DummyStore)(observer(App));
