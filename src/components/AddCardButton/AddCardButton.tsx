import React from "react"
import cn from "classnames"
import style from "./style.module.scss"

interface Props {
  name: string
  classname: string 
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  onClick?: () => void
}

const AddCardButton = ({ name, classname, ...rest }: Props) => {
  return (
    <button className={cn(style.cardButton, style[classname])} {...rest}>
      {name}
    </button>
  )
}
export default AddCardButton
