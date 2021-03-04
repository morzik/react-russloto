import React from "react";
import Radio from "./Radio.jsx";

export default function RadioGroup({ options, ...props }) {
  return options.map(option => (<Radio key={ option } label={ option } type="radio" { ...props } />));
}
