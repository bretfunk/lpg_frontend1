import * as React from "react";
import { TextInput } from "./TextInput";
import { EmailInput } from "./EmailInput";
import { FileInput } from "./FileInput";

export type Props<T> = {
  type: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  onChange: (value?: T) => any;
  value?: T;
  style?: any;
};

const InputForType: React.SFC<Props<any>> = props => {
  switch (props.type) {
    case "text": {
      return <TextInput {...props} />;
    }
    case "email": {
      return <EmailInput {...props} />;
    }
    case "file": {
      return <FileInput {...props} />;
    }
    default:
      return <TextInput {...props} />;
  }
};

export class Input extends React.Component<Props<any>> {
  static defaultProps = {
    type: "text"
  };
  render() {
    return <InputForType {...this.props} />;
  }
}
