import React from "react";
import AvatarContent from "./AvatarContent";


interface Props{
    children?: React.ReactElement[];
    avatarUrl:string[];
    sizeToDisplay: string;
}





const DEFAULT_MAX_AVATARS = 4;
const AvatarStack: React.FC<Props>=({children, avatarUrl, sizeToDisplay})=>{

    
    const maxAvatar= DEFAULT_MAX_AVATARS; //4
    let toDisplay:string[]=[];
    const noOfAvatar= avatarUrl.length; // 5
    if(noOfAvatar>= maxAvatar){     // 5>4

            toDisplay=avatarUrl.slice(0,maxAvatar); //
            console.log(toDisplay);
    }
    else{
        toDisplay= avatarUrl;
    }
    let remaining= avatarUrl.length- maxAvatar;

    let sizeClass="";
                return (
                   
                   <div className="flex flex-row -space-x-2 items-center ">
                       
                       {  console.log("Avatar stack here " , sizeToDisplay , " ", toDisplay)} 
                       
                         {toDisplay.map((avatar, id) => {
                             
                              if(sizeToDisplay==="sm"){
                                          sizeClass=" h-8 w-8"
                                      }
                                      else if(sizeToDisplay==="md"){
                                          sizeClass=" h-12 w-12"
                                      }
                                      else if(sizeToDisplay==="lg"){
                                          sizeClass=" h-20 w-20"
                                      }
                                      else if(sizeToDisplay==="xl"){
                                          sizeClass=" h-24 w-24"
                                      }

                                      
                      return(
                          <div>
                            <AvatarContent sizeClass={sizeClass} imgUrl={avatar} /> 
                            </div>
                              
                         )}

                         )
                      }
                       {remaining>0 ? <div className=" z-10 text-14 p-2 px-8 text-blue-400 bg-gray-200 rounded-lg h-6">+{ remaining} more</div>: ''}


           
                </div>
                );
}

export default AvatarStack;