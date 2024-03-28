import React from "react";
import AddIconSvg from "./assets/Group.svg";

export default function NewPhoto({ handleClick }) {
  return <button className="tile tile-new" onClick={handleClick}><img src={AddIconSvg} alt='' /></button>;
}
