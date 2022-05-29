import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FortunePage } from "./pages/FortunePage";
import { Page404 } from "./pages/Page404";
import { Result } from "./pages/Result";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <FortunePage />
          </Route>
          <Route path="/result/:foutuneresult">
            <Result />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
