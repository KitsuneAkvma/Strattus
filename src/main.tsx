import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import Store, { persistor } from "./Redux/store.ts";

import App from "./App.tsx";
import "./index.css";
import CircuralProgress from "@mui/material/CircularProgress";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={Store}>
    <PersistGate
      loading={<CircuralProgress aria-busy={true} />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
);
