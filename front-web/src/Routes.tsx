import { Http2ServerRequest } from "http2";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

function Routes () {
    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;