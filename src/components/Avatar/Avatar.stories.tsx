import Avatar from "./Avatar";
import "../../../src/index.css";
 
const sizes = {sm:"sm",md:"md",lg:"lg",xl:"xl"};
export default {
    title: "Avatar",
    component: Avatar,
    argsTypes:{
        size: {
            options: Object.keys(sizes),
            mapping: sizes,
            control: {
                type: "select",
            },
        }
    }
}; 
 
export const Main= (args: any) => <Avatar{...args}></Avatar>
Main.args={
    size:"xl"
   
}
 
