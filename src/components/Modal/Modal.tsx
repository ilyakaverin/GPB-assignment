import { useRef, useEffect, useContext } from "react"
import cn from "classnames"
import style from "./style.module.scss"
import { UserContext } from "../../context/userContext"
import { ContextInterface } from '../../interfaces';
import AddCardButton from "../AddCardButton/AddCardButton";


function Modal() {
  const ModalRef = useRef<HTMLDivElement>(null)
  const { store, dispatch } = useContext(UserContext) as ContextInterface
  const { isModalOpened: isOpen } = store.state

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement
    body.style.overflow  = isOpen ? "hidden" : '' 

  }, [isOpen])
  const handleCloseModal = () => {
    dispatch({ type: "modalToggle", datakey: "isModalOpened", payload: false })
  }
  const handleClickRoot = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    if (!ModalRef.current!.contains(target)) {
      dispatch({
        type: "modalToggle",
        datakey: "isModalOpened",
        payload: false,
      })
    }
  }
  return (
    <div className={cn(style.root, { [style.open]: isOpen })} onClick={handleClickRoot}>
      <div ref={ModalRef} className={style.modal}>
        <pre>{JSON.stringify(store?.result, null, 2)}</pre>
        <AddCardButton classname='modalClose' name="Закрыть" onClick={handleCloseModal} />
      </div>
    </div>
  )
}

export default Modal
