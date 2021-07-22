import React from "react";
import AvatarContent from "./AvatarContent";
import AvatarStack from "./AvatarStack";

interface Props{
 
}

const AvatarBox: React.FC<Props>=(props)=>{
    return(
        <div>
            <AvatarStack>
             <AvatarContent size="xl" 
          img={"https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg"} ></AvatarContent>
             <AvatarContent size="xl" 
          img={"https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"} ></AvatarContent>
             <AvatarContent size="xl" 
          img={"https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"} ></AvatarContent>
             <AvatarContent size="xl" 
          img={"https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg"} ></AvatarContent>
           <AvatarContent size="xl" 
          img={"https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg"} ></AvatarContent>
         </AvatarStack>
        </div>
    );
};
AvatarBox.defaultProps={
}

export default AvatarBox;