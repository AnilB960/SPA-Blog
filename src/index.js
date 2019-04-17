import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import News from "./News";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Programming from "./Programming";
import Hobbies from "./Hobbies";
import People from "./People";
import "./index.css";

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/programming" component={Programming} />
            <Route path="/hobbies" component={Hobbies} />
            <Route path="/people" component={People} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);

ReactDOM.render(
    <News />,
    document.getElementById("ajax-data")
);

