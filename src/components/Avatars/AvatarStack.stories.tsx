import AvatarStack from "./AvatarStack";
import "../../../src/index.css";
 
 
const sizeToDisplay = {sm:"sm",md:"md",lg:"lg",xl:"xl"};
export default {
    title: "AvatarStack",
    component: AvatarStack,
    argTypes:{
        sizeToDisplay: {
            control: {
                type: "select",
                 options: sizeToDisplay,
            mapping: sizeToDisplay,
            },
            
        }
    }
}; 
 
export const Main= (args: any) => <AvatarStack{...args}></AvatarStack>
Main.args={
    avatarUrl:["https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg","https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg","https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg"],
  sizeToDisplay:"lg"
}
 
