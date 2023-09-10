import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    //component recursion
    //n-level nesting
  return comments.map((comment, i) => (
    <div key={i}>
        <Comment data={comment} />
        <div className="px-5 mx-5 border border-l-black">
        <CommentList comments={comment.replies}/>
    </div>
    </div>
  )
)};

export default CommentList;
