import Image from "./Image";
import LikeButton from "./LikeButton";
import CommentBtn from "./CommentBtn";
function Post({path}){

  let postStyle ={display:"flex", gap:"10px" }
  return(
    <>
      <Image path = {path} />
      <div style={postStyle}>
        <LikeButton />
        <CommentBtn />
      </div>
    </>
  );
}

export default Post;