import React from 'react';
import style from './style.module.scss';
import CommonInfo from '../../components/CommonInfo/CommonInfo';

const Main = () => {
    return (
        <main className={style.main__container}>
            <div className={style.main__container_form}>
                <CommonInfo header="Общая информация" />

            </div>


        </main>
    )
}
export default Main