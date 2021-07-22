import React, { useState } from "react";
import AvatarContent from "./AvatarContent";


interface Props{
    children: React.ReactElement[];
}





const DEFAULT_MAX_AVATARS = 4;
const AvatarStack: React.FC<Props>=({children})=>{
    
    const maxAvatar= DEFAULT_MAX_AVATARS;
    let toDisplay:React.ReactElement[]=[];
    const noOfAvatar= children.length;
    if(noOfAvatar> maxAvatar){
            toDisplay=children.slice(0,maxAvatar); 
    }
    let remaining= children.length- maxAvatar;

    let sizeClass="";
    let sizeToDisplay='';
                return (
                   <div className="flex flex-row -space-x-2 items-center ">
                         {toDisplay.map((child, id) => {
                              sizeToDisplay= child.props.size;
                              if(sizeToDisplay==="sm"){
                                          sizeClass="h-4 w-4"
                                      }
                                      else if(sizeToDisplay==="md"){
                                          sizeClass="h-6 w-6"
                                      }
                                      else if(sizeToDisplay==="lg"){
                                          sizeClass="h-10 w-10"
                                      }
                                      else if(sizeToDisplay==="xl"){
                                          sizeClass=" h-20 w-20"
                                      }
                             
                      return(
                              <div className=" hover:translate-y-1 cursor-pointer transform  ">
                     
                          
                    <img src={child.props.img} alt="avatar" className={" rounded-full  border-2 border-white"+ sizeClass}/>
                    

                </div>                
                         )}
                         )
                      }
                       {remaining>0 ? <div className=" z-10 text-14 p-2 px-8 text-blue-400 bg-gray-200 rounded-lg h-6">+{ remaining} more</div>: ''}


           
                </div>
                );
}

export default AvatarStack;