import React from "react";
import "./avatar.styles.scss";
const Avatar = ({ imgUrl, name = "Name" }) => {
  return (
    <div className="avatar">
      {imgUrl ? (
        <img src={imgUrl} alt={name} />
      ) : (
        <span>{name[0].toUpperCase()}</span>
      )}
    </div>
  );
};

export default Avatar;
