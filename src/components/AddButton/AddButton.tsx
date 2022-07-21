import React from "react"
import cn from "classnames"
import style from "./style.module.scss"
import { ACTIONTYPE } from "../../reducer"

interface AddButtonProps {
  name: string
  isVisible: boolean | undefined
  click: Function
  action: ACTIONTYPE
}

const AddButton = ({ name, isVisible, click, action }: AddButtonProps) => {
  return (
    <button
      onClick={() => click(action)}
      className={cn(style.addButton, { [style.visible]: !isVisible })}
    >
      {name}
    </button>
  )
}
export default AddButton
