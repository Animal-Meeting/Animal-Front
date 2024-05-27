import React from "react";

const ImageView = (props) => {
    return <img src={props.url} alt={props.alt} height={props.height} width={props.width} onClick={() => {}} />;
};

export default ImageView;
