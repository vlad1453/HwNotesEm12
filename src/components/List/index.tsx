import { Children } from "../../types/types";
import "././style.css";
function ContainerCtrucure(props: Children) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
}

export default ContainerCtrucure;
