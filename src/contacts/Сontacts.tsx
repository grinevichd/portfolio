import React from 'react';
import style from './Сontacts.module.css'
import styleContainer from '../common/style/Container.module.css'
import styleButton from '../common/style/Button.module.css'
import {Title} from "../common/compomemts/title/Title";

export const Сontacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title title={"Get In Touch"}/>
                <div className={style.formBlock}>
                <form className={style.formContainer}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"Email"}/>
                    <textarea  placeholder={"Message"}>
                    </textarea>
                </form>
                </div>
                <button className={`${styleButton.button} ${style.button}`}>Send message</button>
            </div>
        </div>
    );
};

