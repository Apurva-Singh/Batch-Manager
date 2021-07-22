import React, { Children } from "react";
import AvatarStack from "./AvatarStack";

interface Props{
 size: string;
 img: string;
 children?:React.ReactNode;
}

const AvatarContent: React.FC<Props>=({children})=>{
 

    return(
        <div>
            {children}

      
  
      </div>
    );
};
AvatarContent.defaultProps={
    size: "lg" ,
}

export default AvatarContent;