import React from 'react';
import style from './Сontacts.module.css'
import styleContainer from '../common/style/Container.module.css'
import styleButton from '../common/style/Button.module.css'
import {Title} from "../common/compomemts/title/Title";
import {Fade} from 'react-awesome-reveal';

export const Сontacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title title={"Get In Touch"}/>
                <div id={'contact'} className={style.formBlock}>
                    <Fade triggerOnce>
                        <form className={style.formContainer}>
                            <input type="text" placeholder={"Name"}/>
                            <input type="text" placeholder={"Email"}/>
                            <textarea placeholder={"Message"}>
                    </textarea>
                            <button type='submit' className={`${styleButton.button} ${style.button}`}><span
                                className={styleButton.textButton}>Send message</span></button>
                        </form>
                    </Fade>
                </div>


            </div>

        </div>
    );
};

