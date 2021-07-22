import React from "react";

interface Props{
 sizeClass: string;
 imgUrl: string;
 onlineStatus?: 'online' | 'offline' | undefined;

 children?:React.ReactNode;
}

const AvatarContent: React.FC<Props>=({imgUrl, onlineStatus, sizeClass})=>{
 

    return(
        <div>
                      <div className=" hover:translate-y-1 cursor-pointer transform  ">
                     
                          
                     <img src={imgUrl} alt="avatar" className={" rounded-full  border-2 border-white"+ sizeClass}/>
                     
 
                 </div>      

      
  
      </div>
    );
};
AvatarContent.defaultProps={

}

export default AvatarContent;