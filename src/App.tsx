import * as React from "react";
import Checkbox from "./Components/Checkbox.tsx";
import "./style.css";
import { ItemType, list } from "./list.ts";

export default function App() {
  const [allChecked, setAllChecked] = React.useState<boolean>(false)
  const handleAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setAllChecked(event?.target.checked)
    console.log(event?.target.checked)
  }
  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <h1 className="font-medium text-white text-base">Algochurn</h1>
      <h2 className="font-bold text-white text-xl mb-4">
        Select All Implementation
      </h2>
      <p className="text-white text-sm text-center">
        Read the description to start solving the problem.
      </p>
      <Checkbox type={"parent"} allChecked={allChecked} onChange={handleAllChange} label={"Select All"}/>
      {list.map((listItem: ItemType) => (
      <Checkbox key={listItem.id} type={"child"} allChecked={allChecked} onChange={handleAllChange} label={listItem.name} item={listItem}/>
      ))}
    </div>
  );
}
