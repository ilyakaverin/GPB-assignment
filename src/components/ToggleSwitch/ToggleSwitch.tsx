import React from "react"
import { FieldRenderProps } from "react-final-form"
import style from "./style.module.scss"

type Props = FieldRenderProps<boolean, any>

const CheckboxInput: React.FC<Props> = ({
  input: { value, ...input },
}: Props) => <input className={style.switch} {...input} checked={value} />

export default CheckboxInput
