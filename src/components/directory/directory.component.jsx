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
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
