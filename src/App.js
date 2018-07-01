import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layout";
import Exercises from "./components/Exercises";
import { muscles, exercises } from "./store";

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
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

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    console.log(this.getExercisesByMuscles());
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header muscles={muscles} />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
