import Button  from "./Button";
import "../../../src/index.css";
 
export default {
    title: "Button",
    component: Button
}; 
 
 const Template = (args: any) => <Button {...args} ></Button>
        
export const Main:any = Template.bind({});

Main.args={
    children: "Login",
    disabled:false,
    className:"",
    type:"submit",
    btnType: "solid",
}
 
