import React from "react";

export default props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input {...props.input}
            className="form-control"
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type} />
    </div>
);
