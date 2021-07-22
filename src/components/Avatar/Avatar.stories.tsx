import Avatar from "./Avatar";
import "../../../src/index.css";
 
export default {
    title: "Avatar",
    component: Avatar
}; 
 
export const Main= (args: any) => <Avatar{...args}></Avatar>
Main.args={
    size:"sm"
   
}
 
