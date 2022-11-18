import React, {useState} from 'react';

import style from "./Navi.module.css"
import * as Scroll from 'react-scroll'



export const Navi = () => {


    return (
        <div className={style.navi}>
            <a>Home</a>
            <Scroll.Link to={'skills'} smooth activeClass={style.active} >Skills</Scroll.Link>
            <Scroll.Link to={'projects'} smooth >Projects</Scroll.Link>
            <Scroll.Link to={'contact'} smooth >Contact</Scroll.Link>
        </div>
    );
};

