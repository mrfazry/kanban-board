import React, { Component } from "react";
import { connect } from "react-redux";

import InnerCard from "./InnerCard";

class Card extends Component {
  render() {
    const { cardTitle } = this.props;
    let x;

    if (cardTitle === "Backlog") {
      x = this.props.backlog;
    } else if (cardTitle === "Todo") {
      x = this.props.todo;
    } else if (cardTitle === "Doing") {
      x = this.props.doing;
    } else if (cardTitle === "Done") {
      x = this.props.done;
    }

    const innerCard = x.map((key, index) => (
      <InnerCard
        key={`${cardTitle}-${index}`}
        title={key.title}
        description={key.description}
        point={key.point}
        assignedTo={key.assignedTo}
        group={cardTitle}
        number={index}
      />
    ));

    return (
      <div className="card">
        <div className="card-header text-center">{cardTitle}</div>
        <div className="card-body">{innerCard}</div>
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
)(Card);
