import React from "react";

const sizes = {
  xl: "text-[90px] font-bold md:text-5xl",
  s: "text-lg font-bold",
  md: "text-[26px] font-bold md:text-2xl sm:text-[22px]",
  xs: "text-sm font-bold",
  lg: "text-[54px] font-bold md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-transparent font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
