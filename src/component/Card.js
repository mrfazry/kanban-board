import React, { Component } from "react";
import InnerCard from "./InnerCard";

export default class Card extends Component {
  render() {
    const { title } = this.props;

    return (
      <div class="card">
        <div class="card-header text-center">{title}</div>
        <div class="card-body">
          <InnerCard />
        </div>
      </div>
    );
  }
}
