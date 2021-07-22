import ProgressBar from "./ProgressBar";
import "../../../src/index.css";
 
export default {
    title: "ProgressBar",
    component: ProgressBar
}; 
 
export const Main= (args: any) => <ProgressBar{...args}></ProgressBar>
Main.args={
   width:30,
   theme:'primary',
}
 
