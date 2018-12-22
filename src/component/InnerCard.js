import React, { Component } from "react";
import Modal from "react-bootstrap4-modal";
import { connect } from "react-redux";
import {
  addBacklog,
  deleteBacklog,
  moveToTodo,
  deleteTodo,
  moveToDoing,
  deleteDoing,
  moveToDone,
  deleteDone
} from "../action";

class InnerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      title: "",
      description: "",
      point: 0,
      assignedTo: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    const group = e.target.getAttribute("group");
    const number = e.target.getAttribute("number");

    if (group === "Backlog") {
      this.setState({
        title: this.props.backlog[number].title,
        description: this.props.backlog[number].description,
        point: this.props.backlog[number].point,
        assignedTo: this.props.backlog[number].assignedTo
      });
    } else if (group === "Todo") {
      this.setState({
        title: this.props.todo[number].title,
        description: this.props.todo[number].description,
        point: this.props.todo[number].point,
        assignedTo: this.props.todo[number].assignedTo
      });
    } else if (group === "Doing") {
      this.setState({
        title: this.props.doing[number].title,
        description: this.props.doing[number].description,
        point: this.props.doing[number].point,
        assignedTo: this.props.doing[number].assignedTo
      });
    } else if (group === "Done") {
      this.setState({
        title: this.props.done[number].title,
        description: this.props.done[number].description,
        point: this.props.done[number].point,
        assignedTo: this.props.done[number].assignedTo
      });
    }

    this.setState({ visibility: true });
  }

  handleCancel() {
    this.setState({ visibility: false });
  }

  handleDelete(e) {
    const group = e.target.getAttribute("group");
    const number = e.target.getAttribute("number");
    if (group === "Backlog") {
      this.props.deleteBacklog(number);
    } else if (group === "Todo") {
      this.props.deleteTodo(number);
    } else if (group === "Doing") {
      this.props.deleteDoing(number);
    } else if (group === "Done") {
      this.props.deleteDone(number);
    }

    this.setState({ visibility: false });
  }

  handleMove(e) {
    const group = e.target.getAttribute("group");
    const number = e.target.getAttribute("number");
    const direction = e.target.getAttribute("direction");
    let data;

    if (group === "Backlog") {
      data = {
        title: this.props.backlog[number].title,
        description: this.props.backlog[number].description,
        point: this.props.backlog[number].point,
        assignedTo: this.props.backlog[number].assignedTo
      };

      this.props.moveToTodo(data);
      this.props.deleteBacklog(number);
    } else if (group === "Todo") {
      data = {
        title: this.props.todo[number].title,
        description: this.props.todo[number].description,
        point: this.props.todo[number].point,
        assignedTo: this.props.todo[number].assignedTo
      };

      if (direction === "next") {
        // move to doing
        this.props.moveToDoing(data);
      } else if (direction === "previous") {
        // move to backlog
        this.props.addBacklog(data);
      }

      this.props.deleteTodo(number);
      // this.props.deleteTodo(number)
    } else if (group === "Doing") {
      data = {
        title: this.props.doing[number].title,
        description: this.props.doing[number].description,
        point: this.props.doing[number].point,
        assignedTo: this.props.doing[number].assignedTo
      };

      if (direction === "next") {
        // move to done
        this.props.moveToDone(data);
      } else if (direction === "previous") {
        // move to todo
        this.props.moveToTodo(data);
      }

      this.props.deleteDoing(number);
      // this.props.deleteDoing(number)
    } else if (group === "Done") {
      data = {
        title: this.props.done[number].title,
        description: this.props.done[number].description,
        point: this.props.done[number].point,
        assignedTo: this.props.done[number].assignedTo
      };

      this.props.moveToDoing(data);
      this.props.deleteDone(number);
      // this.props.deleteDone(number)
    }

    this.setState({ visibility: false });
  }

  render() {
    const { title, point, assignedTo, number, group } = this.props;
    const { visibility } = this.state;
    let next, previous;

    if (group === "Backlog") {
      previous = null;
      next = "Todo";
    } else if (group === "Todo") {
      previous = "Backlog";
      next = "Doing";
    } else if (group === "Doing") {
      previous = "Todo";
      next = "Done";
    } else if (group === "Done") {
      previous = "Doing";
      next = null;
    }

    const modal = (
      <Modal visible={visibility} onClickBackdrop={this.handleCancel}>
        <div className="modal-header">
          <h5 className="modal-title" style={{ margin: "0 auto" }}>
            {this.state.title}
          </h5>
        </div>
        <div className="modal-body">
          <p>
            <strong>For:</strong>
          </p>
          <p>{this.state.assignedTo}</p>
          <p>
            <strong>Description:</strong>
          </p>
          <p>{this.state.description}</p>
          <p>
            <strong>Point:</strong>
          </p>
          <p>{this.state.point}</p>
          <p>
            <strong>Status:</strong>
          </p>
          <p>{group}</p>
        </div>
        <div className="modal-footer">
          <div className="col-sm">
            {previous !== null ? (
              <button
                number={number}
                group={group}
                direction="previous"
                type="button"
                className="btn btn-primary"
                onClick={this.handleMove}
              >
                Move to {previous}
              </button>
            ) : null}
          </div>
          <div className="col-sm">
            <button
              number={number}
              group={group}
              type="button"
              className="btn btn-danger"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
          <div className="col-sm">
            {next !== null ? (
              <button
                number={number}
                group={group}
                direction="next"
                type="button"
                className="btn btn-info"
                onClick={this.handleMove}
              >
                Move to {next}
              </button>
            ) : null}
          </div>
        </div>
      </Modal>
    );

    return (
      <div className="card">
        <div className="card-header text-center">{title}</div>
        <div className="card-body">
          <p className="card-title">to: {assignedTo}</p>
          <p className="card-text">point: {point}</p>
        </div>
        <button
          number={number}
          group={group}
          type="button"
          className="btn btn-info"
          style={{ margin: "10px auto" }}
          onClick={this.handleClick}
        >
          Show detail
        </button>
        {modal}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  backlog: state.backlog,
  todo: state.todo,
  doing: state.doing,
  done: state.done
});

export default connect(
  mapStateToProps,
  {
    addBacklog,
    deleteBacklog,
    moveToTodo,
    deleteTodo,
    moveToDoing,
    deleteDoing,
    moveToDone,
    deleteDone
  }
)(InnerCard);
