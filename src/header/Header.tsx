import React from 'react';
import style from "./Header.module.css"
import {Navi} from "./navi/Navi";

export const Header = () => {
    return (
        <div className={style.header}>
            <Navi />
        </div>
    );
};

