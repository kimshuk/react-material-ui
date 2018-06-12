import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layout";
import Exercises from "./components/Exercises";
import { muscles, exercises } from "./store";

export default class App extends Component {
  state = {
    exercises,
    category: ""
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        // console.log(muscles, " muscles");
        // console.log(exercise, " exercise");
        // console.log(exercises, " exercises");
        // console.log(exercises[muscles], " exercises[muscles]");

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  render() {
    console.log(this.getExercisesByMuscles());
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
