import {
    BlackCardComponent, SessionTitle
} from "./style";
import under from "../../images/udv.gif";

const Left = () => {
  return (
    <BlackCardComponent>
      <SessionTitle>Left Sidebar</SessionTitle>
      <img src={under}/>
    </BlackCardComponent>
  );
}
export default Left;