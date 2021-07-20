import React from "react";

interface Props{
 
}

const Sidebar: React.FC<Props>=(props)=>{
    return(
        <div className="h-screen w-80 bg-gray-400 hidden">
         This is a sidebar
        </div>
    );
};
Sidebar.defaultProps={
}

export default Sidebar;