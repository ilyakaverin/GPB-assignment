import React from "react";
import style from "./style.module.scss";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<boolean, any>;

const CheckboxInput: React.FC<Props> = ({
  input: { value, ...input }
}: Props) => <input className={style.switch} {...input} checked={value} />;

export default CheckboxInput;