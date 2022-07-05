import React from "react"
import cn from "classnames"
import style from "./style.module.scss"
import { ACTIONTYPE } from "../../reducer"

interface AddButtonProp {
  name: string
  isVisible: boolean | undefined
  click: Function
  action: ACTIONTYPE
}

function AddButton({ name, isVisible, click, action }: AddButtonProp) {
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
