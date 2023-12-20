import { memo } from "react";
import Style from "./inputForm.module.css"
function InputForm(props) {
 console.log("hh");
  return (
    <div className={Style.input}>    
        <input name={props.name}
        type='text'
        style={{border:`1px solid ${props.error ? 'red' : 'black'}`}}
        value={props.value}
        onChange={(e)=> props.Change(e.target.value)}
        placeholder={props.placeholder}/>
    </div> 
  );
}

export default memo(InputForm);