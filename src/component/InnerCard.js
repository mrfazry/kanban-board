import React, { Component } from "react";
import Modal from "react-bootstrap4-modal";
import { connect } from "react-redux";

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
    console.log(e.target);
    const group = e.target.getAttribute("group");
    const number = e.target.getAttribute("number");
    console.log(group, number);

    if (group === "Backlog") {
      console.log(this.props.backlog);
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

  handleDelete() {
    console.log("delete");
  }

  handleMove() {
    console.log("move");
  }

  render() {
    const { title, point, description, assignedTo, number, group } = this.props;
    const { visibility } = this.state;

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
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleMove}
            >
              Move to Todo
            </button>
          </div>
        </Modal>
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
  null
)(InnerCard);
