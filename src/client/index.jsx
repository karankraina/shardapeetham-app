import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./main.css";

const jsx = (
	<RouterProvider router={router} />
);

const rootDOMNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootDOMNode);
root.render(jsx);