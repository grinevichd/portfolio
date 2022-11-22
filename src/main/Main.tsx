import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/style/Container.module.css"
import {Header} from "../header/Header";
import {Particle} from './particles/Particles';
import {Fade} from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';
import cv from '../assets/Cv/Cv.pdf'

export const Main = () => {
    const downloadFile = () => {

      const file = document.createElement('a')
        file.href  = cv
        file.setAttribute('download',`Cv.pdf`)
        document.body.append(file)
        file.click()
        file.remove()
    }
    return (

        <div className={style.mainBlock}>
            <Particle/>
            <Header/>
            <div className={styleContainer.container}>

                <div className={style.block}>

                        <div className={style.text}>
                            <span>Hello</span>
                            <h1>I’m Dmitry Grinevich</h1>
                            <p>Frontend Developer.</p>
                                <button onClick={downloadFile} className={style.btn}><span>Check my CV</span></button>
                        </div>
                        <Tilt className={style.photo} >
                            <div />
                        </Tilt>

                </div>

            </div>

        </div>
    );
};
