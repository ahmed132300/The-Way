import React from "react";
import "./Blog.css";
export default function Blog(props) {
  return (
    <div className="blog">
      <div>
        <img src={props.img} alt="" srcset="" />
      </div>
      <div className="text">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <br />
        <button onClick={() => window.location.pathname = props.link}>
          {props.btn}
        </button>
      </div>
    </div>
  );
}
