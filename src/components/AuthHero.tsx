import React, { useEffect } from "react";

interface Props{
 
}

const AuthHero: React.FC<Props>=(props)=>{
    useEffect(()=>{
        console.log("auth rendering");
    }, []);
    
    return(
        <div className="h-screen w-1/2 bg-black text-white">
            Logo here
        </div>
    );
};
AuthHero.defaultProps={
}

export default AuthHero;