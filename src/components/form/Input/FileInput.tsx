import * as React from "react";
import { Props } from "./index";

export const FileInput: React.SFC<Props<any>> = props => (
  <input
    type="file"
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
  />
);
