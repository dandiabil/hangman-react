import React, { useEffect, useState } from "react";

const Placeholder = ({ arrayOfLetter }) => {
  return (
    <div>
      {arrayOfLetter.map((item, idx) => (
        <span className="letter" key={idx}>
          {item.show ? item.data : "_"}
        </span>
      ))}
    </div>
  );
};

export default Placeholder;
