import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import TradingView from "./TradingView";
// import { } from "./actions/index";
window.store = store;

const App = () => {
  return (
    <div>
      <br/>
      <br/>
      <TradingView/>
    </div>
  );
};
export default App;
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
