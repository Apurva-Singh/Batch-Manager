import SolidButton  from "./SolidButton";
import "../../../src/index.css";
 
export default {
    title: "SolidButton",
    component: SolidButton
}; 
 
 const Template = (args: any) => <SolidButton {...args}></SolidButton>
        
export const Main:any = Template.bind({});

Main.args={
    children: "Login",
    disabled:false,
    className:"",
    type:"submit",
}
 
