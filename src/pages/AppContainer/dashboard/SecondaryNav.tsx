import React from "react";

interface Props{
 
}

const SecondaryNav: React.FC<Props>=(props)=>{
    return(
        <div className="sticky top-14 bg-white z-10">
        <div className=" flex h-12 justify-between shadow-sm items-center ">
            <div className="flex space-x-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         <p>Sales</p>
         </div>
         <select name="settings" id="settings">
            <option value="Settings">Settings</option>
            <option value="Mail">Mail</option>
            <option value="P
            rint">P
            rint</option>
            <option value="Download">Download</option>
            <option value="Share">Share</option>
        </select>
        </div>
        </div>
    );
};
SecondaryNav.defaultProps={
}

export default SecondaryNav;