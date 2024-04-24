import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  outline: {
    white_A700_33: "border-white-A700_33 border border-solid",
    gray_900_19: "border-gray-900_19 border border-solid text-black-900",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = {
  md: "h-[41px]",
  xs: "h-[29px] px-[13px] text-[13px]",
  sm: "h-[39px] px-[15px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700_33", "gray_900_19", "white_A700", "black_900"]),
};

export { Button };
