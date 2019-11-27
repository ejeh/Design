import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#076380"
        }}
      >
        <Route path="/" component={Main} />
        <Route path="/aboutUs" component={""} />
        <Route path="/howItworks" component={""} />
        <Route path="/contactUs" component={""} />
        <Route path="/feq" component={""} />
        <Route path="/fedpay" component={""} />
      </div>
    </BrowserRouter>
  );
}

export default App;
