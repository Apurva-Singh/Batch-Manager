import React, { memo } from "react";
import { useParams } from "react-router-dom";

interface Props{
}

const Lecture: React.FC<Props>=(props)=>{
    const {lectureNumber, batchNumber}= useParams<any>();
    console.log(batchNumber);
 
    return(
        <div>
         This is a batch # {batchNumber}  lecture # {lectureNumber} page.
        </div>
    );
};
Lecture.defaultProps={
}

export default memo(Lecture);