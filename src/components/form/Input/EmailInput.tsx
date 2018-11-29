import * as React from "react";
import { Props } from "./index";

export const EmailInput: React.SFC<Props<string>> = props => (
  <input
    type="email"
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
  />
);
