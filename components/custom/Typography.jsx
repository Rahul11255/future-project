import { cn } from "@/lib/utils";
import React from 'react'


const Typography = ({
    className,
    variant = "p",
    color = "text-black",
    children,
  }) => {
    const Component = variant;
  
    const responsiveFontSizes = {
        h1: "text-[25px] md:text-[28px] lg:text-[40px]", 
        h2: "text-[19px] md:text-[25px] lg:text-[33px] montserrat", 
        h3: "text-[19px] md:text-[22px] lg:text-[28px] montserrat", 
        h4: "text-[18px] md:text-[20px] lg:text-[25px]", 
        h5: "text-[16px] md:text-[19px] lg:text-[23px]", 
        p: "text-[14px] md:text-[15px] lg:text-[16px]", 
        span: "text-[14px] md:text-[15px] lg:text-[16px]", 
      };
      
      
    return (
      <Component
        className={cn("my-1", color, responsiveFontSizes[variant], className)}
      >
        {children}
      </Component>
    );
  };
  
  export default Typography;