import React from 'react';
import style from "./Navi.module.css"

export const Navi = () => {
    return (
        <div className={style.navi}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>

        </div>
    );
};

