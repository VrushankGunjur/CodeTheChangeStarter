import React, { createElement } from "react";

const Square = ({value, onClick}) => {


  return (
    //<><>
    // TODO: Create a clickable square that can contain an X or O
    //</>
    
    <button className="squares" onClick={onClick}>{value}</button>
    
  );
};


export default Square;
