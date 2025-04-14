function Image({path}){
  let imgStyle = {border : "1px solid white", width:"40%", height:"40%"}
  return(
    <img src= {path} style={imgStyle}/>
  );
}

export default Image;

