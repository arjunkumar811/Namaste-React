import React from "react";
import ReactDOM from "react-dom/client";

// creating heading element using React.createElement

// React.createElement => ReactElement (JS Object) => HTMLElement (render) => DOM (Browser)


const heading = React.createElement("h1", { id: "heading" }, "Namasate React 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
