import React from "react";
import "./loader.scss";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="fallback-spinner h-100">
    <div className="loading">
      <Spinner color="primary" />
    </div>
  </div>
);
export default Loader;
