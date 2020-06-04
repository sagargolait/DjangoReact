import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseRouter from "./routes";
import "./App.css";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layouts";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}
export default App;
