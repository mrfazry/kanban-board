import React, { Component } from "react";
import Card from "./Card";

export default class Main extends Component {
  render() {
    const titles = ["Backlog", "Todo", "Doing", "Done"];
    const card = titles.map(title => (
      <div className="col-sm">
        <Card title={title} />
      </div>
    ));

    return (
      <div className="container-fluid">
        <div className="row">{card}</div>
      </div>
    );
  }
}
