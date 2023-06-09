
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

const portalDiv = document.getElementById('root')!; // отметили в конце восклицательным знаком (если не,то ....)
const root = ReactDOM.createRoot(portalDiv);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
