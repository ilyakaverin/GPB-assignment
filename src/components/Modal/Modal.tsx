// @ts-nocheck
import { useRef, useEffect, useContext } from "react";
import cn from "classnames";
import style from "./style.module.scss";
import { UserContext, ContextInterface } from "../../context/userContext";
import AddCardButton from "../AddCardButton/AddCardButton";

const Modal = () => {
  const ModalRef = useRef<HTMLDivElement>();
  const { store, dispatch } = useContext(UserContext) as ContextInterface;
  const { isModalOpened: isOpen } = store.state;

  useEffect(() => {
    document.querySelector("body").style.overflow = isOpen ? "hidden" : null;
  }, [isOpen]);
  const handleCloseModal = () => {
    dispatch({ type: "modalToggle", datakey: "isModalOpened", payload: false });
  };
  const handleClickRoot = (event: Event) => {
    if (!ModalRef.current.contains(event.target)) {
      dispatch({
        type: "modalToggle",
        datakey: "isModalOpened",
        payload: false,
      });
    }
  };
  return (
    <div
      className={cn(style.root, { [style.open]: isOpen })}
      onClick={handleClickRoot}
    >
      <div ref={ModalRef} className={style.modal}>
        <pre>{JSON.stringify(store?.result, null, 2)}</pre>
        <AddCardButton name="Закрыть" onClick={handleCloseModal} />
      </div>
    </div>
  );
};

export default Modal;
