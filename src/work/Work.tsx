import React from 'react';
import style from './Work.module.css'
import styleContainer from  '../common/style/Container.module.css'
import styleButton from '../common/style/Button.module.css'
export const Work = () => {
    return (
        <div className={style.work}>
            <div className={`${styleContainer.container} ${style.blockWork}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={styleButton.button}>Нанять меня</button>
            </div>
        </div>
    );
};

