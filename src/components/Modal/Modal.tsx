// @ts-nocheck
import { useRef, useEffect, useContext}  from 'react'
import cn from 'classnames'
import s from './style.module.scss';
import { UserContext, ContextInterface } from '../../context/userContext';
import AddCardButton from '../AddCardButton/AddCardButton';


const Modal = () => {

    const ModalRef = useRef<HTMLDivElement>()
    const { store, dispatch } = useContext(UserContext) as ContextInterface;
    const { isModalOpened: isOpen } = store.state

    useEffect(() => {
        // @ts-ignore
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;

    },[isOpen])
    const handleCloseModal = () => {
        dispatch({type: 'modalToggle', datakey: 'isModalOpened', payload: false})
    }
    const handleClickRoot = (event: any) => {
        //@ts-ignore
        if(!ModalRef.current.contains(event.target)) {
            dispatch({type: 'modalToggle', datakey: 'isModalOpened', payload: false})
        }
    }
    return (

        <div className={cn(s.root, { [s.open] : isOpen })} onClick={handleClickRoot}> 
            
            <div ref={ModalRef} className={s.modal}>
            <pre>{JSON.stringify(store?.result, null, 2)}</pre>
            <AddCardButton name="Закрыть" onClick={handleCloseModal} />
            </div>
        </div>


    )
}

export default Modal