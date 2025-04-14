import { useState } from "react";

function CommentBtn() {
  let [cmt, setCmt] = useState(false);
  let toggleCmt = () => {
    setCmt(!cmt);
  };
  return (
    <>
      <p onClick={toggleCmt}>
        {cmt ? (
          <>
            <i className="fa-solid fa-comment"></i>
            <input type="text" placeholder="Enter comment" />
          </>
        ) : (
          <i className="fa-regular fa-comment"></i>
        )}
      </p>
    </>
  );
}

export default CommentBtn;