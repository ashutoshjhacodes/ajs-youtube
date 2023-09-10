import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-4 m-2 shadow-sm bg-gray-200 rounded-lg">
      <img
        className="h-8 w-8"
        alt="comment_person"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&usqp=CAU"
      />
      <div className=" px-4">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
