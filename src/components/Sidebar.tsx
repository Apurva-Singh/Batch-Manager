import React from "react";

interface Props{
 
}

const Sidebar: React.FC<Props>=(props)=>{
    return(
        <div className="h-screen absolute top-26 w-80 bg-gray-200 ">
         This is a sidebar
        </div>
    );
};
Sidebar.defaultProps={
}

export default Sidebar;