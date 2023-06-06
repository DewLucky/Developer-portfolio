import React from "react";
import './toolitem.css'

export default function ToolItem(props) {
  const url = "/assets/toolsIcon";
  return (
    <>
      <div className="about-tool-item">
        <div className="box-icon">
          <img src={url + props.img} alt="" />
        </div>
        <div className="box-text">
          <p>{props.toolName}</p>
        </div>
      </div>
    </>
  );
}
