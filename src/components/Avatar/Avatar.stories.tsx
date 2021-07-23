import Avatar from "./Avatar";
import "../../../src/index.css";
 
const sizes = {sm:"sm",md:"md",lg:"lg",xl:"xl"};
export default {
    title: "Avatar",
    component: Avatar,
    argTypes:{
        size: {
            control: {
                type: "select",
                 options: sizes,
            mapping: sizes,
            },
            
        }
    }
}; 
 
export const Main= (args: any) => <Avatar{...args}></Avatar>
Main.args={
    size: "xl",
    onlineStatus:"online",
   
}
 
