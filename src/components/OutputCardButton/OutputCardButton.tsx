import React from 'react';
import style from './style.module.scss';
import { useGetPicture } from '../../customHooks';


const OutputCardButton = ({name, click, img}:any) => {


    const [image] = useGetPicture(img)
    
    return (
        <button className={style.outputButton} onClick={click} ><img className={style.image} src={image} alt={name} />{name}</button>
    )
}
export default OutputCardButton;