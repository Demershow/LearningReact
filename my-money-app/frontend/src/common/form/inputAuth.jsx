import Reac from "react";
import If from "./if";

export default (props) => (
  <If test={!props.hide}>
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
    </div>
  </If>
);
