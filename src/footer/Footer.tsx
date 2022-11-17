import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/style/Container.module.css'
import {Title} from "../common/compomemts/title/Title";
import telegramImg from '../assets/image/telegram-svgrepo-com.svg'
import linkedInImg from '../assets/image/linkedin-svgrepo-com.svg'
import gitHubImg from '../assets/image/github-svgrepo-com.svg'
import {propsStyleGenerator} from "../lib/propsStyleGenerator";
const Footer = () => {
    const telegram = propsStyleGenerator(telegramImg)
    const linkedIn = propsStyleGenerator(linkedInImg)
    const gitHub = propsStyleGenerator(gitHubImg)
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.wrapper}`}>
                <Title title='Contact Info'/>
                <div className={style.container}>
                    <div className={style.item} style={telegram}/>
                    <div className={style.item} style={linkedIn}/>
                    <div className={style.item} style={gitHub}/>

                </div>
                <span className={style.text}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;