import React from "react";

interface Props{
 size: string;
 onlineStatus: 'online'|'offline'|'undefined'; 
}
const badgeClass={
    online: " bg-green-500",
    offline: " bg-gray-400",
    undefined: " hidden"
}
const Avatar: React.FC<Props>=({size, onlineStatus})=>{
    let sizeClass="";
    if(size==="sm"){
        sizeClass=" h-10 w-10";
    }
    else if(size==="md"){
        sizeClass=" h-12 w-12";
    }
    else if(size==="lg"){
        sizeClass=" h-20 w-20";
    }
    else if(size==="xl"){
        sizeClass=" h-24 w-24";
    }

    return(
        
       
            <div className={"relative min-h-10 min-w-10"
            +sizeClass}>
                
                <img src="https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg"
                alt="avatar" className={"rounded-full absolute inset-0 h-full w-full"} />
                <button className={" rounded-full h-6 w-6 absolute right-0 bottom-0 -mt-16 ml-14 border-2 border-white"+ badgeClass[onlineStatus] }></button>
                </div>
                
                
     
    );
};
Avatar.defaultProps={
    size: "sm" ,
    onlineStatus:"online",
}

export default Avatar;