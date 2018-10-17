import React from "react";
import { connect } from "react-redux";
import * as contentActions from "../../redux/actions/content";

const Header = props => { 
  return (
    <header className="App-header">
      <h1>Coding Task</h1>
    </header>
  );
};
export default connect(
  ({ content }) => ({
    ...content
  }),
  contentActions
)(Header);
