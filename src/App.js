import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layout";
import Exercises from "./components/Exercises";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />

        <Footer />
      </Fragment>
    );
  }
}
