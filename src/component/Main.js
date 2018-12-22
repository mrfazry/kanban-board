import React, { Component } from "react";
import Modal from "react-bootstrap4-modal";

import Card from "./Card";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

import { connect } from "react-redux";
import { addBacklog } from "../action";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      visibility: false,
      title: "",
      description: "",
      point: 0,
      assignedTo: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clearState() {
    this.setState({
      visibility: false,
      title: "",
      description: "",
      point: 0,
      assignedTo: ""
    });
  }

  handleClick() {
    this.setState({ visibility: true });
  }

  handleCancel() {
    this.clearState();
  }

  handleAdd() {
    const data = {
      title: this.state.title,
      description: this.state.description,
      point: this.state.point,
      assignedTo: this.state.assignedTo
    };
    this.props.addBacklog(data);
    this.clearState();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const titles = ["Backlog", "Todo", "Doing", "Done"];
    const card = titles.map((title, index) => (
      <div className="col-sm" key={`col-sm-${index}`}>
        <Card cardTitle={title} key={`card-${index}`} />
      </div>
    ));
    const { visibility } = this.state;

    return (
      <div className="container-fluid" style={{ marginBottom: "20px" }}>
        <div className="row">
          <button
            type="button"
            className="btn btn-info"
            style={{ margin: "10px auto" }}
            onClick={this.handleClick}
          >
            Add task
          </button>
          <Modal visible={visibility} onClickBackdrop={this.handleCancel}>
            <div className="modal-header">
              <h5 className="modal-title" style={{ margin: "0 auto" }}>
                Add a new task
              </h5>
            </div>
            <div className="modal-body">
              <h6>Title:</h6>
              <InputText
                placeholder="Task title"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <h6>Description:</h6>
              <InputTextArea
                name="description"
                placeholder="Task description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <h6>Point:</h6>
              <InputText
                placeholder="Task point"
                name="point"
                type="number"
                value={this.state.point}
                onChange={this.handleChange}
              />
              <h6>Assigned to:</h6>
              <InputText
                placeholder="Person assigned to"
                name="assignedTo"
                type="text"
                value={this.state.assignedTo}
                onChange={this.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={this.handleAdd}
              >
                Add
              </button>
            </div>
          </Modal>
        </div>
        <div className="row">{card}</div>
      </div>
    );
  }
}

export default connect(
  null,
  { addBacklog }
)(Main);
