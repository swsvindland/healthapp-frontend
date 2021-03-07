import React, { FC } from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Theme from "./Theme";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Routes />
      </Theme>
    </BrowserRouter>
  );
};

export default App;
