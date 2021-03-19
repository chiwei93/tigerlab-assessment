import React from "react";
import filterBtn from "./FilterBtn.module.css";

const FilterBtn = ({ type, value, active, onClick }) => {
  const activeClass = active ? filterBtn.active : null;

  return (
    <button
      className={`${filterBtn.btnFilter} ${activeClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default FilterBtn;
