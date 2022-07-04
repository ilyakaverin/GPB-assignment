import React, { useContext } from 'react';
import style from './style.module.scss';
import { UserContext, ContextInterface } from '../../context/userContext';
import cn from 'classnames';


const StateFilling = () => {

    const { store } = useContext(UserContext) as ContextInterface;
    const { data , businessInfo, currentLicense, survey } = store.state.fillState;

    return (
        <section className={style.filling}>
            <h4>Заполнение анкеты</h4>
        <ul>
            <li className={style[data]} >Информация</li>
            <li className={style[businessInfo]}> Сведения</li>
            <li className={cn(style[currentLicense], {[style.hidden] : !store.state.hasLicense })}>Лицензии</li>
            <li className={style[survey]}>Опросник</li>
        </ul>
        </section>

    )
}
export default StateFilling;