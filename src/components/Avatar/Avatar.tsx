import React from "react";

interface Props{
 size: string;
}

const Avatar: React.FC<Props>=({size})=>{
    let sizeClass="";
    if(size==="sm"){
        sizeClass="h-4 w-4";
    }
    else if(size==="md"){
        sizeClass="h-6 w-6";
    }
    else if(size==="lg"){
        sizeClass="h-10 w-10";
    }
    else if(size==="xl"){
        sizeClass=" h-20 w-20";
    }

    return(
        
       
            <div className=" ">
                
                <img src="https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg"
                alt="avatar" className={"rounded-full relative "+sizeClass} />
                {/* <button className="bg-green-500 rounded-full h-4 w-4 sticky -mt-16 ml-14 border-white"></button> */}
                </div>
                
                
     
    );
};
Avatar.defaultProps={
    size: "sm" ,
}

export default Avatar;