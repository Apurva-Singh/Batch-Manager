import React from "react";

interface Props{
 
}

const NotFound: React.FC<Props>=(props)=>{
    return(
        <div className=" w-screen h-screen bg-green-300">
         Sorry the page is not found
        </div>
    );
};
NotFound.defaultProps={
}

export default NotFound;