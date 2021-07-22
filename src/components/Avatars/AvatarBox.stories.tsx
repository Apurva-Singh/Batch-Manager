import AvatarBox from "./AvatarBox";
import "../../../src/index.css";
 
export default {
    title: "AvatarBox",
    component: AvatarBox
}; 
 
export const Main= (args: any) => <AvatarBox{...args}></AvatarBox>
Main.args={
   size:'xl',
   url: "https://unsplash.com/photos/rW-I87aPY5Y",
}
 
