import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import style from './style.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { ReactComponent as Avatar} from '../../assets/avatar.svg';
import { ReactComponent as Bell} from '../../assets/bell.svg';
import { ReactComponent as Logout} from '../../assets/logout.svg';

const Menu = () => {

    const context = useContext(UserContext);

    

    return (
        <header className={style.menu__container}>
            <Logo />
            <div className={style.menu__container_actions}>
            <div className={style.menu__container_username}>
            <Avatar />
            <span>{context?.state.username}</span>
            </div>
            <Bell />
            <Logout />
            </div>

        </header>
    )
}
export default Menu