import React from "react";
import VerticalProgressBar from "./VerticalProgressBar";

interface Props{
 
}

const DailySalesCard: React.FC<Props>=(props)=>{
    return(
    
        <div className="flex-col shadow-2xl w-72 p-8 rounded-xl">
            <div className="flex flex-row justify-between  ">
                <div className="flex flex-col"> 
                <h1 className=" font-bold">Daily Sales </h1>
                 <p className="text-14 font-normal">Go to columns for details.</p>
                 </div>
                 <div className=" text-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="36" height="36" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" p-2 text-center text-yellow-600 bg-yellow-300  rounded-full"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
             
                </div>
                <div className="pt-20 flex space-x-6">
                   <VerticalProgressBar height="h-12" />
                   <VerticalProgressBar height="h-14" />
                   <VerticalProgressBar height="h-16" />
                   <VerticalProgressBar height="h-10" />
                   <VerticalProgressBar height="h-8" />
                   <VerticalProgressBar height="h-6" />
                   <VerticalProgressBar height="h-4" />
                </div>
                </div>
      
    );
};
DailySalesCard.defaultProps={
}

export default DailySalesCard;