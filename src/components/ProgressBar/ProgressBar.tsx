import React from "react";

interface Props{
 width: number;
 theme: 'primary' | 'warning' | 'dark' | undefined;
}

const ProgressBar: React.FC<Props>=({width,theme})=>{
  let themeClass="";
  let bgThemeClass="";
  if(theme==='primary'){
    bgThemeClass=" bg-blue-200";
      themeClass= " bg-blue-400 ";
  }
  else if(theme==='warning'){
    bgThemeClass=" bg-red-200";
      themeClass= " bg-red-400";
  }
  else if(theme=== 'dark'){
    bgThemeClass=" bg-gray-200";
    themeClass=" bg-gray-800";
  }
        const widthClass= `w-${width}%`;
    return(
        <div className="relative pt-1">
        <div className={"overflow-hidden h-2 mb-4 text-xs flex rounded"+ bgThemeClass}>
          <div className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center " + widthClass + themeClass}></div>
        </div>
      </div>
    );
};
ProgressBar.defaultProps={
    width:30,
    theme:'primary',
}

export default ProgressBar;