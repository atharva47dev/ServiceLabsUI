import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[34px] md:text-[40px] text-[44px]",
  h2: "font-normal sm:text-[31px] md:text-[33px] text-[35px]",
  h3: "font-normal sm:text-2xl md:text-[26px] text-[28px]",
  h4: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h5: "font-normal text-[22px] sm:text-lg md:text-xl",
  h6: "font-normal text-xl",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
