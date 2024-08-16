import React, { ChangeEvent, useState } from "react"; 
import { ItemType } from "../list";

type CheckboxProps = {
  type: string
  allChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string
  item?: ItemType
}
export default function Checkbox({type, allChecked, onChange, label, item}: CheckboxProps) { 
  const [value, setValue] = useState<boolean>(allChecked);
  const handleChange = () => {
    // console.log("changed")
    type === 'parent' ? setValue(allChecked) : setValue((prevState: boolean)=> !prevState);
  }
  return (
    <React.Fragment>
       <div className={`checkbox-container checkbox-container--${type}`}>
         <input type="checkbox" checked={value} id={item?.name || 'Select All'} onChange={type === 'child' ? handleChange : onChange}/>
         <label htmlFor={item?.name || 'Select All'}>{item?.name || 'Select All'}</label>
       </div> 
    </React.Fragment>
  );
}
