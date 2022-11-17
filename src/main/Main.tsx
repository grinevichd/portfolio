import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/style/Container.module.css"
import {Header} from "../header/Header";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Header/>
            <div className={styleContainer.container}>
                <div className={style.block}>
            <div className={style.text}>
                <span>Hello</span>
                <h1>I’m Dmitry Grinevich</h1>
                <p>Frontend Developer.</p>
                <a href="#"><button className={style.btn}><span>Check my CV</span></button></a>
            </div>
            <div className={style.photo}>1</div>
                </div>
            </div>
        </div>
    );
};
