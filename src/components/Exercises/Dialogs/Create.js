import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class Create extends Component {
  state = {
    open: false,
    exercises: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: value }) => {
    this.setState({
      exercise: {
        ...this.state.exercises,
        [name]: value
      }
    });
  };

  render() {
    const {
        open,
        exercises: { title, description, muscles }
      } = this.state,
      { muscles: categories } = this.props;

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <AddIcon />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>

            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("muscles")}
                margin="normal"
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange}>
                  {categories.map(category => (
                    <MenuItem value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
