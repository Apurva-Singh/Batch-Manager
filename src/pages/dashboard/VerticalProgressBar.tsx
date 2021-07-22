import React from "react";

interface Props{
 height: string;
}

const VerticalProgressBar: React.FC<Props>=({height})=>{
    return(
        <div>
          <div className={" bg-yellow-400 h-32 w-4"}>
                        <div className={"bg-gray-200 "+ height}></div>
                    </div>
        </div>
    );
};
VerticalProgressBar.defaultProps={
}

export default VerticalProgressBar;