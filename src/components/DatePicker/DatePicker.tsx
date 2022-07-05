import React from "react"
import { FieldRenderProps } from "react-final-form"
import style from "./style.module.scss"

type Props = FieldRenderProps<string, any>

const DatePicker: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <input className={style.dateInput} type="date" {...input} {...rest} />
)
export default DatePicker
