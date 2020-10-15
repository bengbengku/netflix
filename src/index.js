import React from "react";
import { render } from "react-dom";
import App from "./app";
import GlobalsStyles from './global-style';

render(<><GlobalsStyles/><App /></>, document.getElementById("root"));

