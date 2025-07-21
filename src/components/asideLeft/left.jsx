import {
    BlackCardComponent, SessionTitle
} from "./style";
import under from "../../images/udv.gif";

const Left = () => {
  return (
    <BlackCardComponent>
      <SessionTitle>Left Sidebar</SessionTitle>
      <img src={under} alt= "Jesus malhano"/>
    </BlackCardComponent>
  );
}
export default Left;