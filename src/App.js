import { Route } from "react-router";
import "./App.css";

import LoginPage from "./components/login_form/login_page";
import MainPage from "./main_form/main_page";

function App() {
  return (
    <>
      <Route component={LoginPage} path="/" exact />
      <Route component={MainPage} path="/main" exact />
    </>
  );
}

export default App;
