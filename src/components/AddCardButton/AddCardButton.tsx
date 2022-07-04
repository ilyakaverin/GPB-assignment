import React from 'react';
import style from './style.module.scss';
import cn from 'classnames';



const AddCardButton = ({name, classname, ...rest}:any) => {
    return (
        <button className={cn(style.cardButton, style[classname])} {...rest}>{name}</button>
    )
}
export default AddCardButton;