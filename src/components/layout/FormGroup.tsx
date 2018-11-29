import * as React from "react";

type Props = {
  label: string;
  children: any;
};

export const FormGroup: React.SFC<Props> = props => (
  <div>
    <h2>{props.label}</h2>
    {props.children}
  </div>
);
