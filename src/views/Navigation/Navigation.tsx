import React from 'react';
import style from './style.module.scss'
import  Home  from '../../assets/home.svg';

const Navigation = () => {

    const links = [{
        id: 1,
        pic: Home,
        name: 'Главная',
    },
    {
        id: 2,
        pic: Home,
        name: 'Главная',
    }]

    return (
        <aside className={style.navigation__container}>
            <div className={style.navigation__container_links}>
                {
                    links.map(link => <div key={link.id} className={style.navigation__container_link}>
                        <img src={link.pic} alt={link.name}/>
                        <span>{link.name}</span>
                         </div> )
                }
            </div>
        </aside>
    )
}
export default Navigation;