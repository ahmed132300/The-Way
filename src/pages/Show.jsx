import react from "react";
import "./Show.css";
function Show(props) {
  return (
    <>
      <div className="con">
        <h1>{props.Header}</h1>
        <h2>{props.desc}</h2>
      </div>
      <br />
      <div className="text">
        <p>{props.tafseir}</p>
      </div>
    </>
  );
}
export default Show;
