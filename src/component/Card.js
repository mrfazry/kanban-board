import React, { Component } from "react";
import { connect } from "react-redux";

import InnerCard from "./InnerCard";

class Card extends Component {
  render() {
    const { cardTitle } = this.props;

    let headerStyle, bodyStyle;
    const headerColor = "white";

    let list;

    if (cardTitle === "Backlog") {
      list = this.props.backlog;
      headerStyle = {
        backgroundColor: "#f53b3b",
        color: headerColor
      };
      bodyStyle = {
        backgroundColor: "#f77e7e"
      };
    } else if (cardTitle === "Todo") {
      list = this.props.todo;
      headerStyle = {
        backgroundColor: "#2382ae",
        color: headerColor
      };
      bodyStyle = {
        backgroundColor: "#83ccee"
      };
    } else if (cardTitle === "Doing") {
      list = this.props.doing;
      headerStyle = {
        backgroundColor: "#0e2b68",
        color: headerColor
      };
      bodyStyle = {
        backgroundColor: "#82a4ec"
      };
    } else if (cardTitle === "Done") {
      list = this.props.done;
      headerStyle = {
        backgroundColor: "#0c581e",
        color: headerColor
      };
      bodyStyle = {
        backgroundColor: "#6adf85"
      };
    }

    const innerCard = list.map((key, index) => (
      <div>
        <InnerCard
          key={`${cardTitle}-${index}`}
          title={key.title}
          description={key.description}
          point={key.point}
          assignedTo={key.assignedTo}
          group={cardTitle}
          number={index}
        />
        {list.length === index + 1 ? null : <br />}
      </div>
    ));

    return (
      <div className="card">
        <div className="card-header text-center" style={headerStyle}>
          {cardTitle}
        </div>
        <div className="card-body" style={bodyStyle}>
          {innerCard}
        </div>
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
