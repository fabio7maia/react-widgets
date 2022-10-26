import React from "react";
import ReactDOM from "react-dom/client";
import { PrivateSimulator } from "./privateSimulator";
import { PublicSimulator } from "./publicSimulator";
import "./index.css";

import packageJson from "../package.json";

interface RenderComponentMethodInput {
  targetHtmlElement: HTMLElement;
  contextValues?: Record<string, any>;
}

const renderComponent =
  (Component: React.ElementType) =>
  ({ targetHtmlElement, contextValues }: RenderComponentMethodInput) => {
    if (targetHtmlElement) {
      console.log(
        `Render react widget in "${targetHtmlElement.tagName}" tag element.`
      );
      const node = ReactDOM.createRoot(targetHtmlElement);

      const props = contextValues || {};

      node.render(
        <React.StrictMode>
          <Component {...props} />
        </React.StrictMode>
      );
    } else {
      console.error(`The "targetHtmlElement" arg passed is not valid!!!`);
    }
  };

export const api = {
  loadPrivateSimulator: renderComponent(PrivateSimulator),
  loadPublicSimulator: renderComponent(PublicSimulator),
  version: packageJson.version,
};

// init("root");
