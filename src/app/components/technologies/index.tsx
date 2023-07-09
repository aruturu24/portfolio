import Mysql from "../icons/mysql";
import Nodejs from "../icons/nodejs";
import React from "../icons/react";
import "./technologies.scss";

export default function Technologies() {
  return (
    <div id="technologies">
      <h3 className="section-title">Technologies</h3>
      <div id="technologies-group">
        <div className="technology-info">
          <React />
          <span>React.JS</span>
        </div>
        <div className="technology-info">
          <Nodejs />
          <span>NodeJS</span>
        </div>
        <div className="technology-info">
          <Mysql />
          <span>MySQL</span>
        </div>
      </div>
    </div>
  );
}
