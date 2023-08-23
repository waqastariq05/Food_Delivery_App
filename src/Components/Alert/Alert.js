import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible rounded-0 fade show fixed-top`}
          role="alert"
          style={{ top: "65px" }}
        >
          <i
            className={`${props.alert.icon} me-2`}
            style={{ fontSize: "18px" }}
          ></i>
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default Alert;
