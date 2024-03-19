import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store.ts";
import { Toaster } from "sonner";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>

      <Toaster />
    </Provider>
  </React.StrictMode>
);
