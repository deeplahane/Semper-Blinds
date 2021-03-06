import React from "react";

const SectionHeading = ({ heading, id }) => {
  return (
    <h1 className=" text-2xl md:text-4xl text-center font-semibold mt-5 mb-10 text-lime-600 ">
      <span className="navitem heading px-2.5 w-max ">{heading}</span>
    </h1>
  );
};

export default SectionHeading;
