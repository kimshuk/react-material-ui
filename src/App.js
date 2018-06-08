import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layout";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Hello</h1>

        <p>Text</p>
        <Footer />
      </Fragment>
    );
  }
}
