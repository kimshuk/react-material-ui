import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

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
