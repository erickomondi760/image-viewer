import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Context from "./AppContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const clientQuery = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <QueryClientProvider client={clientQuery}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  </Context>
);
