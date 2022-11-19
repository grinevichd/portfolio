import React from 'react';
import style from './Title.module.css'
import {Fade} from "react-awesome-reveal";


type TitlePropsType ={
    title : string
}

export const Title: React.FC<TitlePropsType> = ({title}) => {
    return (
            <div className={style.title}>
                <Fade direction={"top-left"} >
                <h2>{title}</h2>
                </Fade>
            </div>

    );
};

