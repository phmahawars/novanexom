import React from "react";

export const Breadcrumb = ({title}) => {
  return (
    <div className="breadcumb">
      <div className="container">
        <div className="breadcumb-wrapper">
          <div className="breadcumb-bg">
            <img src="./assets/images/shape/breadcumbBg1_1.png" alt="shape" />
          </div>

          <div className="page-heading">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
