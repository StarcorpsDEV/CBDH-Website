import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react"
import priceTicker from "@/components/TokensPriceFunctions"

priceTicker(60000)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <Analytics/>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
