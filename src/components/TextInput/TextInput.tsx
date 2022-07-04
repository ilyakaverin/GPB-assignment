import React from "react";
import style from "./style.module.scss";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <input className={style.textInput} type="text" {...input} {...rest} />
);

export default TextInput;
