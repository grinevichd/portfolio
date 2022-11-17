import React from 'react';
import style from './Title.module.css'


type TitlePropsType ={
    title : string
}

export const Title: React.FC<TitlePropsType> = ({title}) => {
    return (
            <div className={style.title}>
                <h2>{title}</h2>
            </div>

    );
};

