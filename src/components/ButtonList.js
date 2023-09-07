import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Games",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "JavaScript",
  "Web Dev",
  "Bhakti",
  "Frontend Development",
  "Soccer",
];

const ButtonList = () => {
  const newlist = list.map((value, index) => (
    <Button key={index} name={value} />
  ));

  return <div className="flex">{newlist}</div>;
};

export default ButtonList;
