import React from "react";
import { SECTIONS } from "./directory.data.js";
import MenuItem from "../menu-item/menu-item.component.jsx";
import "./directory.styles.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
