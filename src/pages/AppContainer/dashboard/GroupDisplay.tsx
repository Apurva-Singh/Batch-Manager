import React from "react";
import { useHistory } from 'react-router-dom';


interface Props{
 id: number;
 imgUrl: string;
 name: string;
 description: string;
}

const GroupDisplay: React.FC<Props>=({id,imgUrl, name, description})=>{
    const history = useHistory();
    return(
        <div 
        onClick = {() => history.push("/groups/" + id)}
        >       
            <div className="flex rounded-md shadow-sm transform hover:-translate-y-1 hover:text-blue-800 ease-in-out text-xs md:text-lg h-20 space-x-4 w-full px-20 items-center max-w-xl md:m-auto even:bg-gray-100 hover:bg-gray-400"
 
        >
               
                 <div className=" ">
              {/* <img src={imgUrl} alt="thumb" className="rounded-full w-12 h-12 items-center text-sm" /> */}
              </div>
              <div className="flex-col" >
                <p className=" font-semibold">{name}</p>
                {/* <p className="text-primary text-14">{description}</p> */}
                </div>
              
            </div>
           </div>
      
    );
};
GroupDisplay.defaultProps={
}

export default GroupDisplay;