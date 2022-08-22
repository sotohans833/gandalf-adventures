import React from "react";
import { createRoot } from "react-dom/client";
import App from "@routes/App";

//create root for the app
const root = createRoot(document.getElementById("app"));
//render the app
root.render(<App/>);
