import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./routes";
import { store } from "./store";
import "./main.css";

const jsx = (
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);

const rootDOMNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootDOMNode);
root.render(jsx);