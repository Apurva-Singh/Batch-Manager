import React from "react";

interface Props{
 progress: number;
 theme: 'primary' | 'warning' | 'dark' | undefined;
}

const ProgressBar: React.FC<Props>=({progress,theme})=>{
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
        const widthStyle=`${progress}%`;  
        const style ={
          width: widthStyle,
        }
    return(
        <div className="relative pt-1">
        <div className={"overflow-hidden h-2 mb-4 text-xs flex rounded"+ bgThemeClass}>
          <div style={style} className={"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center " + themeClass}></div>
        </div>
      </div>
    );
};
ProgressBar.defaultProps={
    progress:30,
    theme:'primary',
}

export default ProgressBar;