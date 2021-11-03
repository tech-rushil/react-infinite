import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";
import "./index.css";
import "antd/dist/antd.css";
import Loader from "./components/Loader";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import WithAuth from "./components/Auth/AuthHoc";

const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loader />}>
                <Switch history={history}>
                    <WithAuth exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                </Switch>
            </Suspense>
        </Provider>
    );
}

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
