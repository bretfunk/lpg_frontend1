import * as React from "react";
import { Props } from "./index";

export const TextInput: React.SFC<Props<string>> = props => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      name={props.name}
      required={props.required}
      placeholder={props.placeholder}
    />
  );
};
