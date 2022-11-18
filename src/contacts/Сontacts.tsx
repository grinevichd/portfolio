import React, {useState} from 'react';
import style from './Сontacts.module.css'
import styleContainer from '../common/style/Container.module.css'
import styleButton from '../common/style/Button.module.css'
import {Title} from "../common/compomemts/title/Title";
import {Fade} from 'react-awesome-reveal';
import {sendMessage} from "../Api/Api";

export const Сontacts = () => {
    const getParams = async () => {
        const form = document.querySelector('#form')
        const formData = new FormData(form as any)
        const name = formData.get('Name')
        const email = formData.get('Email')
        const message = formData.get('Message')
     await sendMessage({name,email,message})

    }
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title title={"Get In Touch"}/>
                <div id={'contact'} className={style.formBlock}>
                    <Fade triggerOnce>
                        <form className={style.formContainer} id={"form"}>
                            <input type="text" placeholder={"Name"} name={"Name"}/>
                            <input type="text" placeholder={"Email"} name={"Email"}/>
                            <textarea placeholder={"Message"} name={"Message"}>
                    </textarea>
                            <button type='button' onClick={getParams} className={`${styleButton.button} ${style.button}`}><span
                                className={styleButton.textButton}>Send message</span></button>
                        </form>
                    </Fade>
                </div>


            </div>

        </div>
    );
};

