import React from 'react';
import style from './style.module.scss';
import cn from 'classnames'
import { ACTIONTYPE } from '../../reducer';

interface AddButtonProp {
    name: string,
    isVisible: boolean | undefined,
    click: Function,
    action: ACTIONTYPE;
}


const AddButton = ({name, isVisible, click, action}:AddButtonProp) => {

    return (
        <button onClick={() => click(action)} 
                className={cn(style.addButton, {[style.visible] : !isVisible})}
                >{name}</button>
    )
}
export default AddButton