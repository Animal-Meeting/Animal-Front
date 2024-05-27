import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const PercentageBar = (props) => {
    return (
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <img
                src={props.iconSrc}
                alt="icon"
                style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "5px",
                }}
            />
            <span
                style={{
                    width: "70px",
                    textAlign: "left",
                    fontFamily: "Cafe24Ssurround",
                    alignItems: "center",
                    fontSize: "1.4rem",
                }}
            >
                {props.title}
            </span>

            <div style={{ width: "100%" }}>
                <ProgressBar completed={props.percentage} bgColor={props.bgColor} baseBgColor={props.bgBaseColor} />
            </div>
        </div>
    );
};

export default PercentageBar;
