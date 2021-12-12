import React, { createElement } from "react";

const Square = ({value, onClick}) => {

  return (
    
    <button className="squares" onClick={onClick}>{value}</button>
    
  );
};


export default Square;
