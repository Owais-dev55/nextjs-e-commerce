import React from 'react';

interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  textcolor?: string;
  background?: string;
  transform?: "uppercase" | "capitalize" | "lowercase" | "none";
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  textsize?: number | string;
  rounded?: number | string;
  fontweight?: number;
  margintop?: number | string
}

const Button: React.FC<ButtonProps> = ({
  text,
  width = "", 
 height = "50px", 
  textcolor = "white",
  background = "blue",
  transform = "none",
  pt = "0",
  pb = "0",
  pl = "0",
  pr = "0",
  textsize = "16px",
  rounded = "5px",
  fontweight = 400,
  margintop = 0
}) => {
  return (
    <button
      className="mt-4 gap-2 text-center tracking-wider leading-8"
      style={{
        width,
        height,
        backgroundColor: background,
        color: textcolor,
        textTransform: transform,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        fontSize: textsize,
        borderRadius: rounded,
        fontWeight: fontweight,
        marginTop: margintop
      }}
    >
      {text}
    </button>
  );
};

export default Button;
